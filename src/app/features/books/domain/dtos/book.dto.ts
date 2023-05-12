export interface CreateBookDTO {
    title: string;
    synopsis: string;
    author: string;
}

export interface BookDetailDTO {
    id: string;
    title: string;
    synopsis: string;
    author: string;
    createdAt: Date,
    updatedAt: Date,
}