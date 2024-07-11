import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/selectors";
import { deleteElmentInProducts } from "../../../redux/actions";

const ProductUl = () => {
  const products = useSelector(getProducts);

  const dispatch = useDispatch();

  return (
    <ul>
      {products.map((pr) => {
        return (
          <li key={pr.id}>
            <p>{pr.id}</p>
            <p>{pr.name}</p>
            <p>{pr.price}</p>
            <button
              onClick={() => {
                dispatch(deleteElmentInProducts(pr.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductUl;
