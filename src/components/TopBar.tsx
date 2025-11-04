import Categories from "./AppCategories";
import Filter from "./AppFilter";

const TopBar = () => (
  <div className="m-10 flex flex-col justify-between gap-4 xl:flex-row">
    <Categories />
    <Filter />
  </div>
);

export default TopBar;
