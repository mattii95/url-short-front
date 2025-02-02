export interface Shorten {
    id: number;
    url: string;
    shortCode: string;
    accessCount: number;
    createdAt: Date;
    updatedAt: Date;
}

export type ShortenFormData = Pick<Shorten, 'url'>;