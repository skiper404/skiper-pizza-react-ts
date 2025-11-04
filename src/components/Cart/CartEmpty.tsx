import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const CartEmpty = () => (
  <div className="flex flex-col items-center">
    <span className="text-4xl">🥺</span>
    <h1 className="text-2xl font-semibold">Корзина пустая</h1>
    <p className="text-center text-gray-400">
      Добавьте первую пиццу в корзину что бы сделать заказ
    </p>
    <Link
      to="/"
      className="mt-10 flex cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-2 text-gray-400 transition hover:bg-emerald-100"
    >
      <GoChevronLeft className="size-6" />
      Вернуться назад
    </Link>
  </div>
);

export default CartEmpty;
