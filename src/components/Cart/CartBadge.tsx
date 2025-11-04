import { FiShoppingCart } from "react-icons/fi";
import { useStore } from "../../store/store";

interface Product {
  price: number;
  count: number;
}

const CartBadge = () => {
  const { cart } = useStore();

  const totalPrice = cart.reduce(
    (sum: number, product: Product): number =>
      sum + product.price * product.count,
    0,
  );
  const totalCount = cart.reduce(
    (sum: number, product: Product): number => sum + product.count,
    0,
  );

  return (
    <div className="flex h-10 cursor-pointer items-center gap-4 rounded-full bg-emerald-500 px-4 font-light text-white transition hover:bg-amber-400">
      <div className="hidden gap-2 md:flex">
        <span>{totalPrice}</span>
        <span>₴</span>
      </div>
      <div className="hidden h-1/2 w-0.5 bg-white/50 md:block"></div>
      <div className="flex gap-2">
        <FiShoppingCart className="size-5" />
        <span>{totalCount}</span>
      </div>
    </div>
  );
};

export default CartBadge;
