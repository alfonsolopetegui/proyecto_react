"use client";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext();

const baseURL = "http://localhost:5000/products";
const cartURL = "http://localhost:5000/cart";
const storageURL = "http://localhost:5000/storageInfo";
const accesoriesURL = "http://localhost:5000/accesories";

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [storage, setStorage] = useState([]);
  const [accesories, setAccesories] = useState([]);

  const addToCart = async (prod) => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };

    await axios(cartURL, options);
  };

  const updateFromCart = async (prod, increase) => {
    const { id } = prod;
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },

      data: JSON.stringify({
        ...prod,
        quantity: increase ? (prod.quantity + 1) : (prod.quantity - 1),
      }),
    };
    await axios(`${cartURL}/${id}`, options);
  };

  const deleteFromCart = async (prod) => {
    const { id } = prod;
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(prod),
    };
    await axios(`${cartURL}/${id}`, options);
  };

  // const clearCart =  () => {
  //   cart.forEach(element => {
  //      deleteFromCart(element)
  //   });
  // }

  // const clearCart = async () => {
  //   let cartIds = [];
  //   cart.forEach((el) => cartIds.push(el.id));

  //   await axios.delete(`${cartURL}/${cartIds}`);
  // };

  useEffect(() => {
    axios.get(baseURL).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.get(storageURL).then((res) => setStorage(res.data));
  }, []);

  useEffect(() => {
    axios.get(accesoriesURL).then((res) => setAccesories(res.data));
  }, []);

  useEffect(() => {
     axios.get(cartURL).then((res) => setCart(res.data));
  }, [cart]);

  return (
    <DataContext.Provider
      value={{
        data,
        cart,
        setCart,
        addToCart,
        updateFromCart,
        deleteFromCart,
        storage,
        accesories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
