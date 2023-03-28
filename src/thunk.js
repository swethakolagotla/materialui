/// Specifically for api communication
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "todo/fetchProducts",
  async () => {
    // An async function return a promise
    const data = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
);

export const fetchGoogleBooks = createAsyncThunk(
  "todo/fetchgoogleBooks",
  async () => {
    // An async function return a promise
    /*
       const config={
       }
        const data=await axios.get("https://www.googleapis.com/books/v1/volumes?q=premchand");
        return data;
        */

    const config = {
      headers: {
        Authorization: "Client-ID igcrUejyah-jKr0IIVIvKeAPDu-8hWueYCO3T_kWp_8",
      },
    };
    const data = await axios.get(
      "https://api.unsplash.com/search/photos?page=1&query=office",
      config
    );
    return data;
  }
);

export const fetchImages = createAsyncThunk("todo/fetchImages", async () => {
  // An async function return a promise

  const config = {
    headers: {
      Authorization: "Client-ID igcrUejyah-jKr0IIVIvKeAPDu-8hWueYCO3T_kWp_8",
    },
  };
  const data = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=premchand",
    config
  );
  return data;
});
