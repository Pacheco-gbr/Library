export interface CreateLibrarianDTO {
    name: string;
    email: string;
    password: string;
}

export interface LibrarianDetailDTO {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
