export interface Images {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Product {
    id: number;
    slug: string;
    name: string;
    image: Images;
    category: string;
    categoryImage: Images;
    is_new?: boolean;
    price?: number;
    description?: string;
    features?: string;

    includes?: {
        quantity: number;
        item: string;
    }[];

    gallery?: {
        first: Images;
        second: Images;
        third: Images;
    };
    others?: {
        slug: string;
        name: string;
        image: Images;
    }[]
}

