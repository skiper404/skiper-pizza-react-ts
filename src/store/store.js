import axios from "axios";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  selectedCategory: 0,
  selectedFilter: "popularDesc",
  searchQuery: "",
  currentPage: 1,
  totalPages: 2,
  productsInPage: 5,
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  setCategory: (i) => set({ selectedCategory: i }),
  setFilter: (i) => set({ selectedFilter: i }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentPage: (page) => set({ currentPage: page }),
  resetSearchQuery: () => set({ searchQuery: "" }),
  clearCart: () => set({ cart: [] }),

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
    } else {
      updatedCart = [...cart, { ...pizza, count: 1, uniqueKey }];
    }
    set({ cart: updatedCart });
    return cart.find((product) => product.uniqueKey === pizza.uniqueKey);
  },

  incrementCount: (key) => {
    const cart = get().cart;
    const updatedCart = cart.map((product) =>
      product.uniqueKey === key
        ? { ...product, count: product.count + 1 }
        : product,
    );
    set({ cart: updatedCart });
  },

  decrementCount: (key) => {
    const cart = get().cart;
    const updatedCart = cart.map((product) =>
      (product.uniqueKey === key) & (product.count > 1)
        ? { ...product, count: product.count - 1 }
        : product,
    );
    set({ cart: updatedCart });
  },

  removeFromCart: (key) => {
    const cart = get().cart;
    set({ cart: [...cart].filter((item) => item.uniqueKey !== key) });
  },

  fetchProducts: async () => {
    try {
      const filter = get().searchQuery;
      const page = get().currentPage;
      const limit = get().productsInPage;
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}?title=${filter}&limit=${limit}&page=${page}`,
      );
      set({ products: data });
    } catch (error) {
      console.log(error);
      set({ products: [] });
    }
  },
}));
