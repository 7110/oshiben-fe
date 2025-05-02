'use client';

import React, { useState, useRef, useEffect } from 'react';

import styles from './index.module.css';

type TextareaProps = {
  onSend: (text: string) => void;
  className?: string;
};

export default function Textarea({ onSend, className }: TextareaProps) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSend(value.trim());
      setValue('');
    }
  };

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 80) + 'px';
  }, [value]);

  return (
    <form className={[styles.Textarea, className].join(' ')} onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        className={styles.Textarea__text}
        placeholder="メッセージを入力してね❤️"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={1}
        style={{ maxHeight: '120px', overflowY: 'auto' }}
        required
      />
      <button type="submit" className={styles.Textarea__submit}>
        送信
      </button>
    </form>
  );
}
