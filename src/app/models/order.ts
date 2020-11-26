import orderRows from './orderRows';

export default class Order {
    id: number;
    companyId: string;
    created: Date;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: orderRows[];
}
