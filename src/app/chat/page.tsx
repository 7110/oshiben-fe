'use client';

import { useState } from 'react';

import FloatingNav from '@/components/FloatingNav';
import Messages from '@/components/Messages';
import Textarea from '@/components/Textarea';

import { MessageType } from '@/domain/Message';

import { withBasePath } from '@/utils';

import styles from './page.module.css';

export default function Chat() {
  // const messages: MessageType[] = [
  //   {
  //     message: 'Hello, how can I help you?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'I need help with my order.',
  //     type: 'human',
  //   },
  //   {
  //     message: 'Sure, can you provide me with your order number?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'My order number is 12345.',
  //     type: 'human',
  //   },

  //   {
  //     message: 'Hello, how can I help you?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'I need help with my order.',
  //     type: 'human',
  //   },
  //   {
  //     message: 'Sure, can you provide me with your order number?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'My order number is 12345.',
  //     type: 'human',
  //   },
  //   {
  //     message: 'Hello, how can I help you?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'I need help with my order.',
  //     type: 'human',
  //   },
  //   {
  //     message: 'Sure, can you provide me with your order number?',
  //     type: 'ai',
  //     tips: 'This is a tipThis is a tipThis is a tipThis is a tipThis is a tipThis is a tipThis is a tip',
  //   },
  //   {
  //     message: 'My order number is 12345.',
  //     type: 'human',
  //   },
  //   {
  //     message: 'Hello, how can I help you?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'I need help with my order.',
  //     type: 'human',
  //   },
  //   {
  //     message: 'Sure, can you provide me with your order number?',
  //     type: 'ai',
  //   },
  //   {
  //     message: 'My order number is 12345.',
  //     type: 'human',
  //   },
  // ];

  const [messages, setMessages] = useState<MessageType[]>([
    { message: 'Hello, how can I help you?', type: 'ai' },
    { message: 'I need help with my order.', type: 'human' },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { message: text, type: 'human' }]);
    // TODO: OpenAI APIにリクエストを投げて、AIの応答をセットする処理
  };

  return (
    <main
      className={styles.chat}
      style={{ backgroundImage: `url(${withBasePath('/background.png')})` }}
    >
      <div className={styles.chat__bottom}>
        <FloatingNav></FloatingNav>

        <Messages className={styles.chat__messages} messages={messages} />

        <Textarea className={styles.chat__textarea} onSend={handleSend} />
      </div>
    </main>
  );
}
