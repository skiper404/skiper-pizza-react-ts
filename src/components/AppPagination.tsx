import { useStore } from "../store/store";

export const AppPagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useStore();

  return (
    <ul className="flex items-center gap-4 overflow-auto p-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <li
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`${
            currentPage === i + 1
              ? "bg-emerald-400 text-white"
              : "text-emerald-400"
          } flex size-10 cursor-pointer items-center justify-center rounded-full border p-4`}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};
