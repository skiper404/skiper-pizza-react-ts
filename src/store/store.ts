import axios from "axios";
import { create } from "zustand";

export enum Filter {
  popularDesc = "popularDesc",
  popularAsc = "popularAsc",
  priceDesc = "priceDesc",
  priceAsc = "priceAsc",
}

export enum Categories {
  ALL = "Все",
  MEAT = "Мясные",
  VEGAN = "Вегетарианские",
  GRILL = "Гриль",
  SPICE = "Острые",
}

export const categories = [
  Categories.ALL,
  Categories.MEAT,
  Categories.VEGAN,
  Categories.GRILL,
  Categories.SPICE,
] as const;

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface ProductInCart {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  type: number;
  size: number;
  count: number;
  uniqueKey: string;
  price: number;
  category: number;
  rating: number;
}

export interface StoreState {
  selectedCategory: number;
  selectedFilter: Filter;
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  productsInPage: number;
  products: Product[];
  cart: ProductInCart[];

  setCategory: (id: number) => void;
  setFilter: (filter: Filter) => void;
  setSearchQuery: (searchQuery: string) => void;
  setCurrentPage: (page: number) => void;
  resetSearchQuery: () => void;
  clearCart: () => void;
  addToCart: (
    pizza: Omit<ProductInCart, "uniqueKey">,
  ) => ProductInCart | undefined;
  incrementCount: (key: string) => void;
  decrementCount: (key: string) => void;
  removeFromCart: (key: string) => void;
  fetchProducts: () => void;
}

const persistCart = (cart: ProductInCart[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const useStore = create<StoreState>((set, get) => ({
  selectedCategory: 0,
  selectedFilter: Filter.popularDesc,
  searchQuery: "",
  currentPage: 1,
  totalPages: 2,
  productsInPage: 5,
  products: [],
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),

  setCategory: (id) => set({ selectedCategory: id }),
  setFilter: (filter) => set({ selectedFilter: filter }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentPage: (page) => set({ currentPage: page }),
  resetSearchQuery: () => set({ searchQuery: "" }),
  clearCart: () => {
    set({ cart: [] });
    persistCart([]);
  },

  addToCart: (pizza) => {
    const cart = get().cart;
    const uniqueKey = `${pizza.id}_${pizza.size}_${pizza.type}`;
    const productExistInCart = cart.find(
      (product) => product.uniqueKey === uniqueKey,
    );
    let updatedCart;

    if (productExistInCart) {
      updatedCart = cart.map((product) =>
        product.uniqueKey === uniqueKey
          ? { ...product, count: product.count + 1 }
          : product,
      );
      set({ cart: updatedCart });
      persistCart(updatedCart);
    } else {
      updatedCart = [...cart, { ...pizza, count: 1, uniqueKey }];
    }
    set({ cart: updatedCart });
    persistCart(updatedCart);
    return productExistInCart;
  },

  incrementCount: (key) => {
    const cart = get().cart;
    const updatedCart = cart.map((product) =>
      product.uniqueKey === key
        ? { ...product, count: product.count + 1 }
        : product,
    );
    set({ cart: updatedCart });
    persistCart(updatedCart);
  },

  decrementCount: (key) => {
    const cart = get().cart;
    const updatedCart = cart.map((product) =>
      product.uniqueKey === key && product.count > 1
        ? { ...product, count: product.count - 1 }
        : product,
    );
    set({ cart: updatedCart });
    persistCart(updatedCart);
  },

  removeFromCart: (key) => {
    const cart = get().cart;
    const updatedCart = cart.filter((item) => item.uniqueKey !== key);
    set({ cart: updatedCart });
    persistCart(updatedCart);
  },

  fetchProducts: async () => {
    try {
      const filter = get().searchQuery;
      const page = get().currentPage;
      const limit = get().productsInPage;
      const { data } = await axios.get<Product[]>(
        `${import.meta.env.VITE_API_URL}?title=${filter}&limit=${limit}&page=${page}`,
      );
      set({ products: data });
    } catch (error) {
      console.log(error);
      set({ products: [] });
    }
  },
}));
