'use client';

import { useState } from 'react';

import Messages from '@/components/Messages';
import Textarea from '@/components/Textarea';

import { MessageType } from '@/domain/Message';

import { systemPrompt } from '@/prompt';

import { withBasePath } from '@/utils';

import styles from './page.module.css';

export default function Chat() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleSend = async (text: string) => {
    const nextMessages: MessageType[] = [...messages, { message: text, role: 'user' }];
    setMessages(nextMessages);

    try {
      const baseURL = 'https://163.44.127.243.nip.io'; // 'http://localhost:8000'
      const res = await fetch(`${baseURL}/v1/conversation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ system_prompt: systemPrompt, messages: nextMessages }),
      });

      if (!res.ok) throw new Error('APIエラー');

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          message: data.message,
          role: 'system',
          tips: data.tips,
          japaneseTranslation: data.japanese_translation,
          knowledge: data.knowledge,
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { message: 'サーバーエラーが発生しました。', role: 'system' },
      ]);
    }
  };

  return (
    <main
      className={styles.chat}
      style={{ backgroundImage: `url(${withBasePath('/background.png')})` }}
    >
      <div className={styles.chat__bottom}>
        <Messages className={styles.chat__messages} messages={messages} />

        <Textarea className={styles.chat__textarea} onSend={handleSend} />
      </div>
    </main>
  );
}
