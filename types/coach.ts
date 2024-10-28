export interface Coach {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;
    contract: Contract;
}

interface Contract {
    start: string;
    until: string;
}