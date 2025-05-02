export type MessageType = {
  message: string;
  tips?: string;

  role: 'user' | 'system';
};
