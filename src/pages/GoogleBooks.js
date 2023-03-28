import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGoogleBooks } from "../thunk";

export const GoogleBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoogleBooks());
  }, []);

  return <div>GoogleBooks</div>;
};
