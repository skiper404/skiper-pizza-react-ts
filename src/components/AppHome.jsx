import TopBar from "./TopBar";
import ProductList from "../components/Product/ProductList";
import AppHeader from "./AppHeader";
import { AppPagination } from "./AppPagination";

const AppHome = () => {
  return (
    <>
      <AppHeader />
      <TopBar />
      <h1 className="m-10 text-4xl font-semibold">Все пиццы</h1>
      <ProductList />
      <AppPagination />
    </>
  );
};

export default AppHome;
