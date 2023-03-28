import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../thunk";

const Products = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {todo.apiData.map((ele) => (
        <li>{ele.title}</li>
      ))}
    </div>
  );
};

export default Products;
