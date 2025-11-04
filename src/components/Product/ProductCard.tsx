import React from "react";
import { useStore } from "../../store/store";
import type { Product } from "../../store/store";

const pizzaTypes = ["Тонкое тесто", "Классическая"];

type ProductCardProps = {
  pizza: Product;
};

const ProductCard = ({ pizza }: ProductCardProps) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(30);
  const [isPizzaInStock] = React.useState(true);
  const { addToCart } = useStore();

  const product = {
    id: pizza.id,
    imageUrl: pizza.imageUrl,
    title: pizza.title,
    description: pizza.description,
    type: activeType,
    size: activeSize,
    price: pizza.price,
    category: pizza.category,
    rating: pizza.rating,
    count: 1,
  };

  return (
    <li key={pizza.id}>
      <div className="flex flex-col items-center gap-2 rounded-2xl p-2 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <img className="size-60" src={pizza.imageUrl} alt={pizza.title} />
        <div className="w-full text-center text-lg font-bold text-gray-500">
          {pizza.title}
        </div>
        <div className="flex w-full flex-col gap-2 rounded-2xl bg-emerald-200 p-2 text-gray-500">
          <div className="flex">
            {pizza.types.map((type, i) => (
              <span
                key={i}
                onClick={() => setActiveType(i)}
                className={`${activeType === type ? "border-amber-400 bg-amber-50" : "border-emerald-200"} w-full cursor-pointer rounded-2xl border-2 py-1 text-center`}
              >
                {pizzaTypes[type]}
              </span>
            ))}
          </div>
          <div className="flex">
            {pizza.sizes.map((size, i) => (
              <span
                key={i}
                onClick={() => setActiveSize(size)}
                className={`${activeSize === size ? "border-amber-400 bg-amber-50" : "border-emerald-200"} w-full cursor-pointer rounded-2xl border-2 px-2 py-1 text-center`}
              >
                {size} см.
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full items-center p-2">
          <span className="flex-1 font-semibold text-gray-500">
            от {pizza.price} грн.
          </span>
          <button
            disabled={!isPizzaInStock}
            onClick={() => addToCart(product)}
            className={`${isPizzaInStock ? "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white" : "border-gray-400 bg-gray-200 text-gray-400"} cursor-pointer rounded-2xl border-2 px-4 py-2 font-semibold transition`}
          >
            {isPizzaInStock ? "В корзину" : "Нет в наличии"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
