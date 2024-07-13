interface Customer {
id: number;
name: string;
}

interface Transaction {
id: number;
customer_id: number;
date: string;
amount: number;
}

export type { Customer, Transaction };
