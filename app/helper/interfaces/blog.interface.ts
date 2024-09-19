export interface IBlogArticle {
  id: number;
  title: string;
  image: { src: string };
  description: string;
  category: string;
  date: string;
}

// Define types for content blocks
export type ContentType =
  | "heading"
  | "paragraph"
  | "list"
  | "image"
  | "intro"
  | "additionalIntro";

export interface ListItem {
  heading: string;
  text: string;
}

export interface Content {
  type: ContentType;
  text?: string;
  src?: string; // For image URLs
  alt?: string; // For image alt text
  items?: ListItem[];
}

// Define the main article type
export interface IArticleDetails {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string; 
  intro: string;
  additionalIntro: string;
  content: Content[];
  author: string;
  recentArticles: IBlogArticle[];
}