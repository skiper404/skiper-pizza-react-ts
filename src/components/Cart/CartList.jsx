import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useStore } from "../../store/store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const pizzaTypes = ["Тонкое тесто", "Классическая"];

const CartList = () => {
  const { cart, removeFromCart, incrementCount, decrementCount } = useStore();
  const [parent] = useAutoAnimate();

  return (
    <ul ref={parent} className="flex w-full flex-col gap-8 md:gap-2">
      {cart.map((item) => (
        <li
          key={item.uniqueKey}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            title={item.title}
            className="size-50"
          />
          <div className="mr-0 md:mr-auto">
            <h2 className="font-semibold">{item.title}</h2>
            <div className="flex flex-col gap-2 text-sm text-gray-400 lg:flex-row">
              <span>{pizzaTypes[item.type]}</span>
              <span>{item.size} сантиметров</span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <button
                disabled={item.count <= 1}
                onClick={() => decrementCount(item.uniqueKey)}
                className={
                  item.count <= 1
                    ? "text-gray-400"
                    : `cursor-pointer text-emerald-400 transition hover:text-emerald-500`
                }
              >
                <CiCircleMinus className="size-8" />
              </button>
              <span className="font-semibold">{item.count}</span>
              <button
                disabled={item.count >= 10}
                onClick={() => incrementCount(item.uniqueKey)}
                className={
                  item.count >= 10
                    ? "text-gray-400"
                    : `cursor-pointer text-emerald-400 transition hover:text-emerald-500`
                }
              >
                <CiCirclePlus className="size-8" />
              </button>
            </div>
            <span className="w-20 text-center">
              {item.price * item.count} ₴
            </span>
            <button onClick={() => removeFromCart(item.uniqueKey)}>
              <IoIosCloseCircleOutline className="size-6 cursor-pointer text-gray-400 hover:text-gray-500" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
