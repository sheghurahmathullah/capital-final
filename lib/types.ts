export interface SanityPerspective {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  mainImage: any;
  publishedAt: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  details: {
    location: string;
    area: string;
    completion: string;
  };
  slug:
    | string
    | {
        current: string;
      };
}

export interface Categories {
  name: string;
  title: string;
}

export interface Leader {
  name: string;
  title: string;
  quote?: string;
  category: "board" | "partners" | "executive";
  image?: string;
  location?: string;
}
