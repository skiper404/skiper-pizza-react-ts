import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import { useStore } from "../../store/store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const filtersFactory = {
  popularAsc: (a, b) => a.rating - b.rating,
  popularDesc: (a, b) => b.rating - a.rating,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
};

const ProductList = () => {
  const [isLoading, setLoading] = useState(true);
  const { products, fetchProducts, currentPage, selectedFilter } = useStore();
  const [parent] = useAutoAnimate();

  const sortedProducts = [...products].sort(filtersFactory[selectedFilter]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await fetchProducts();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [fetchProducts, currentPage, selectedFilter]);

  return (
    <div className="relative">
      <ul
        ref={parent}
        className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        {isLoading
          ? [...new Array(8)].map((_, i) => <ProductSkeleton key={i} />)
          : sortedProducts.map((pizza) => (
              <ProductCard pizza={pizza} key={pizza.id} />
            ))}
      </ul>
      {!sortedProducts.length && (
        <h1 className="text-center text-2xl text-gray-400">
          Пицц не найдено...
        </h1>
      )}
    </div>
  );
};

export default ProductList;
