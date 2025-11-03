import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useStore } from "../store/store";
import { useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

const AppSearch = () => {
  const { searchQuery, setSearchQuery, fetchProducts, resetSearchQuery } =
    useStore();

  const location = useLocation();
  const navigate = useNavigate();

  const debouncedSearch = useRef(
    debounce(async () => await fetchProducts(), 500),
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    debouncedSearch.current();
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    params.search = value;
    const query = qs.stringify(params, { addQueryPrefix: true });
    navigate(query, { replace: true });
  };

  useEffect(() => {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    setSearchQuery(params.search || "");
  }, [location.search, setSearchQuery]);

  return (
    <div className="group flex w-full items-center rounded-xl border border-gray-400 px-2 transition focus-within:border-amber-400">
      <FaMagnifyingGlass className="m-2 text-gray-400 transition group-focus-within:text-amber-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        className="w-full text-gray-500 ring-0 outline-0"
        placeholder="Поиск пиццы..."
      />
      {!!searchQuery && (
        <IoIosClose
          className="size-6 cursor-pointer"
          onClick={() => {
            resetSearchQuery();
            navigate("?", { replace: true });
          }}
        />
      )}
    </div>
  );
};

export default AppSearch;
