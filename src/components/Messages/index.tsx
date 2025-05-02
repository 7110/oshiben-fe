import React from 'react';

import { MessageType } from '@/domain/Message';

import styles from './index.module.css';

type MessagesProps = {
  messages: MessageType[];

  className?: string;
};

export default function Messages({ messages, className }: MessagesProps) {
  return (
    <div className={[styles.Messages, className].join(' ')}>
      {messages.map((message, index) => (
        <div key={index} className={styles.Messages__message}>
          <p
            className={`${styles.Messages__text} ${message.type === 'ai' ? styles['Messages__text--ai'] : styles['Messages__text--human']}`}
          >
            {message.message}
          </p>

          {message.tips && <p className={styles.Messages__tips}>{message.tips}</p>}
        </div>
      ))}
    </div>
  );
}
