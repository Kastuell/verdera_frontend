export type ProductT = {
  id: number;
  name: string;
  slug: string;
  subName: string;
  img: string;
  price: number;
  category: {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    slug: string;
  };
  description: DescriptionT;
};

type DescriptionT = {
  firstly: string;
  about?: DescriptionAboutT;
  structure?: DescriptionStructureT;
};

type DescriptionStructureT = {
  title: string;
  items: {
    description: string;
    quantity?: number;
  }[];
};

type DescriptionAboutT = {
  title: string;
  img: string;
  items: ItemsT[];
};

type ItemsT = {
  title?: string;
  description: string;
};