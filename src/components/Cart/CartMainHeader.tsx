import { FiShoppingCart } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { useStore } from "../../store/store";

const MainHeader = () => {
  const { cart, clearCart } = useStore();

  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 text-4xl font-semibold sm:flex-row">
      <div className="flex items-center gap-4">
        <FiShoppingCart />
        <h1>Корзина</h1>
      </div>
      {!!cart.length && (
        <button
          onClick={() => clearCart()}
          className="flex cursor-pointer items-center gap-2 text-base font-light text-gray-400 transition hover:text-gray-500"
        >
          <FaRegTrashCan />
          Очистить корзину
        </button>
      )}
    </div>
  );
};

export default MainHeader;
