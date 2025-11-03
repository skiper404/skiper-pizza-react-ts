import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const CartFooter = () => (
  <div className="flex w-full flex-col justify-between gap-2 px-4 md:flex-row">
    <Link
      to="/"
      className="flex cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-2 text-gray-400 transition hover:bg-gray-100"
    >
      <GoChevronLeft className="size-6" />
      Вернуться назад
    </Link>
    <button className="ml-auto w-full cursor-pointer rounded-full bg-emerald-500 px-8 py-2 text-white transition hover:bg-amber-400 md:w-fit">
      Оплатить сейчас
    </button>
  </div>
);

export default CartFooter;
