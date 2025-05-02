export type MessageType = {
  message: string;
  tips?: string;
  japaneseTranslation?: string;
  knowledge?: string;

  role: 'user' | 'system';
};
