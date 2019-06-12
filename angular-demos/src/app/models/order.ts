import { LineItem } from './line-item';
import { Customer } from './customer';

export class Order {
    id: number;
    order_date: Date;
    customer: Customer;
    order_details: Array<LineItem>;
    
}
