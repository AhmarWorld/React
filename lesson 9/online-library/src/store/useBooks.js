import { create } from "zustand";

function encodeQuery(data) {
  let query = "";
  for (let d in data)
    query += encodeURIComponent(d) + "=" + encodeURIComponent(data[d]) + "&";
  return query.slice(0, -1);
}

export const useBooks = create((set) => ({
  books: [],
  getBooks: (value) =>
    set(async (state) => {
      const params = {
        q: `${value}:keyes`,
        key: process.env.REACT_APP_API_KEY,
      };
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?` + encodeQuery(params)
      );
      const { items } = await res.json();
      return { books: [...state.books, ...items] };
    }),
  wishlist: [],
  getWishlist: () => {
    set((state) => {
      const newWishlist = JSON.parse(localStorage.getItem("books-wishlist"));
      return { wishlist: [...state.wishlist, ...newWishlist] };
    });
  },
  addWishlist: (value) => {
    set((state) => {
      const newWish = { id: new Date().getTime(), ...value };
      localStorage.setItem(
        "books-wishlist",
        JSON.stringify([...state.wishlist, newWish])
      );
      return { wishlist: [...state.wishlist, newWish] };
    });
  },
  deleteWishlist: (value) => {
    set((state) => {
      const newWishlist = [...state.wishlist].filter(
        (wish) => wish.id !== value
      );
      localStorage.setItem("books-wishlist", JSON.stringify(newWishlist));
      return { wishlist: newWishlist };
    });
  },
}));
