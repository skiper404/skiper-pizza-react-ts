import { useRef, useState, useEffect } from "react";
import { useStore } from "../store/store";

const filters = [
  { label: "популярности ⬇️", value: "popularDesc" },
  { label: "популярности ⬆️", value: "popularAsc" },
  { label: "цене ⬇️", value: "priceDesc" },
  { label: "цене ⬆️", value: "priceAsc" },
];

const Filter = () => {
  const { selectedFilter, setFilter } = useStore();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const filter = filters.find((f) => f.value === selectedFilter).label;

  const filterRef = useRef();

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsOpenFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div
      ref={filterRef}
      className="relative z-10 flex w-fit cursor-pointer items-center gap-2"
      onClick={() => setIsOpenFilter(!isOpenFilter)}
    >
      <span className="shrink-0 transition">Сортировка по: </span>
      <span className="text-orange-400">{filter}</span>
      {isOpenFilter && (
        <ul className="absolute top-10 flex flex-col gap-2 rounded-xl border-2 border-emerald-200 bg-orange-50/70 text-gray-500 backdrop-blur-xs">
          {filters.map(({ label, value }) => (
            <li
              onClick={() => setFilter(value)}
              className={`${selectedFilter === value ? "text-orange-400" : ""} cursor-pointer p-2 hover:text-orange-400`}
              key={value}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
