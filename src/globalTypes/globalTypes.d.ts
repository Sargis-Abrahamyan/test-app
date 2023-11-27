export {};

declare global {
  interface Reports {
    userId: number;
    title: string;
    content: string;
    dateCreated: string;
  }
}
