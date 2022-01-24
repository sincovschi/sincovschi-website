export type Article = {
  fileName: string;
  html: string;
  data: {
    title?: string;
    shortDescription?: string;
    coverPath?: string;
    date?: string;
  };
};
