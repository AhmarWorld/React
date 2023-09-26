import { create } from "zustand";

function encodeQuery(data) {
  let query = "";
  for (let d in data)
    query += encodeURIComponent(d) + "=" + encodeURIComponent(data[d]) + "&";
  return query.slice(0, -1);
}

export const useBooks = create((set) => ({
  books: [],
  getBooks: async (value) => {
    const params = {
      q: `${value}:keyes`,
      key: process.env.REACT_APP_API_KEY,
    };
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?` + encodeQuery(params)
    );
    const { items } = await res.json();
    set((state) => ({ books: [...items] }))
  },
  wishlist: JSON.parse(localStorage.getItem('books-wishlist')) || [],
  addWishlist: (value) => {
    set((state) => {
      localStorage.setItem(
        "books-wishlist",
        JSON.stringify([...state.wishlist, value])
      );
      return { wishlist: [...state.wishlist, value] };
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
