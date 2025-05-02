// import Image from "next/image";
import styles from './page.module.css';

import FloatingNav from '@/components/FloatingNav';
import Messages from '@/components/Messages';

import { MessageType } from '@/domain/Message';

import { withBasePath } from '@/utils';

export default function Chat() {
  const messages: MessageType[] = [
    {
      message: 'Hello, how can I help you?',
      type: 'ai',
    },
    {
      message: 'I need help with my order.',
      type: 'human',
    },
    {
      message: 'Sure, can you provide me with your order number?',
      type: 'ai',
    },
    {
      message: 'My order number is 12345.',
      type: 'human',
    },

    {
      message: 'Hello, how can I help you?',
      type: 'ai',
    },
    {
      message: 'I need help with my order.',
      type: 'human',
    },
    {
      message: 'Sure, can you provide me with your order number?',
      type: 'ai',
    },
    {
      message: 'My order number is 12345.',
      type: 'human',
    },
    {
      message: 'Hello, how can I help you?',
      type: 'ai',
    },
    {
      message: 'I need help with my order.',
      type: 'human',
    },
    {
      message: 'Sure, can you provide me with your order number?',
      type: 'ai',
    },
    {
      message: 'My order number is 12345.',
      type: 'human',
    },
    {
      message: 'Hello, how can I help you?',
      type: 'ai',
    },
    {
      message: 'I need help with my order.',
      type: 'human',
    },
    {
      message: 'Sure, can you provide me with your order number?',
      type: 'ai',
    },
    {
      message: 'My order number is 12345.',
      type: 'human',
    },
  ];

  return (
    <main
      className={styles.chat}
      style={{ backgroundImage: `url(${withBasePath('/background.png')})` }}
    >
      <div className={styles.chat__bottom}>
        <FloatingNav></FloatingNav>

        <Messages className={styles.chat__messages} messages={messages} />
      </div>
    </main>
  );
}
