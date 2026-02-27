declare module "*.css";

interface GalleryImages {
    id: number;
    category: string;
    title: string;
    before: string;
    after: string;
    likes: number;
    isBeforeAfter: boolean;
}

interface Service {
  symbol: string;
  title: string;
  description: string;
  price: string;
  tag: string;
}

interface GalleryItem {
  category: Exclude<Category, "All">;
  aspect: "portrait" | "landscape" | "square";
  label: string;
  image: string;
}