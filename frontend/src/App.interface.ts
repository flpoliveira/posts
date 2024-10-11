export type PostType = {
  id: string;
  description: string;
  date: string;
  categories: string[];
};

export type CategoryType = {
  id: string;
  name: string;
  favorite: boolean;
};
