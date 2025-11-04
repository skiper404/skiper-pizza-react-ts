import { useStore } from "../store/store";

const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые"];

const Categories = () => {
  const { selectedCategory, setCategory } = useStore();
  return (
    <ul className="flex gap-4 overflow-auto rounded-3xl bg-emerald-100 p-2 md:w-fit">
      {categories.map((cat, i) => (
        <li
          key={i}
          onClick={() => setCategory(i)}
          className={`${
            selectedCategory === i
              ? "bg-emerald-300 text-white shadow-xl"
              : "bg-gray-100"
          } cursor-pointer rounded-4xl px-4 py-2 font-semibold transition hover:bg-amber-400 hover:text-white`}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
