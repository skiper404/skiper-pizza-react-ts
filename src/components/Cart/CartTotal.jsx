import { useStore } from "../../store/store";

const CartTotal = () => {
  const { cart } = useStore();
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.count,
    0,
  );

  const totalCount = cart.reduce((sum, product) => sum + product.count, 0);

  return (
    <div className="flex w-full flex-col items-center justify-between px-4 text-xl sm:flex-row">
      <div>
        Всего пицц: <span className="font-semibold">{totalCount} шт.</span>
      </div>
      <div>
        Сумма заказа:{" "}
        <span className="font-semibold text-emerald-500">{totalPrice} ₴</span>
      </div>
    </div>
  );
};

export default CartTotal;
