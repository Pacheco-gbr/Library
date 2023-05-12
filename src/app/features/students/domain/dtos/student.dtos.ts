export interface CreateStudentDTO {
    cpf: string;
    phone: string;
    address: string;
}

export interface StudentDetailDTO {
    id: string;
    cpf: string;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
}
