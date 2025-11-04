import { useStore } from "../store/store";

const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые"];

const Categories = () => {
  const { selectedCategory, setCategory } = useStore();
  return (
    <ul className="flex gap-4 overflow-auto">
      {categories.map((cat, i) => (
        <li
          key={i}
          onClick={() => setCategory(i)}
          className={`${
            selectedCategory === i ? "bg-gray-800 text-white" : "bg-emerald-100"
          } cursor-pointer rounded-4xl px-4 py-2 transition hover:bg-amber-400 hover:text-white`}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
