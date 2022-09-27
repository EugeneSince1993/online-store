export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
