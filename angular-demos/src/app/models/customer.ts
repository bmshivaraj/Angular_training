export class Customer {

    name: string;
    email: string;
    phone: string;
    address: { 
        house_no_street ?: string;
        area?: string;
        city?: string;
        state?: string;
    }

    constructor() {
        // this.address = {}
        this.address = { city: 'Bangalore', state: 'Karnataka'}
    }

}

