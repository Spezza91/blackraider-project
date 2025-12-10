export interface AppLink {
    name: string;
    url: string;
    icon?: string;
    description?: string;
    category?: 'media' | 'system' | 'download' | 'other';
    color?: string;
}
