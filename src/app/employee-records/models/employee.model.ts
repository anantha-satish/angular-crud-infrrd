export interface Product {
    id: number;
    name: string;
}

export enum Designation {
    SOFTWARE_DEVELOPER = 'Software Developer',
    SENIOR_SOFTWARE_DEVELOPER = 'Senior Software Developer',
    QUALITY_ASSURANCE = 'Quality Assurance',
    TECHNICAL_LEAD = 'Technical Lead',
    MANAGER = 'Manager'
}

export interface Employee {
    id: number;
    name: string;
    company: string;
    email: string;
    contactNumber: string;
    designation: string;
}