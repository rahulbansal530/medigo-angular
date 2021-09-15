import { CartItem } from "./cartItem";
import { Product } from "./product";

export class Cart {
  cartId: string;
  totalPrice: number;
  discountedPrice: number;
  cart_cartItem: CartItem[];
}
