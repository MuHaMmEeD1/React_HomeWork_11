import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addElementInProducts } from "../../../redux/actions";

const ProductForm = () => {
  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(
          addElementInProducts({
            id: idValue,
            name: nameValue,
            price: priceValue,
          })
        );
      }}
    >
      <input
        type="text"
        placeholder="id"
        value={idValue}
        onChange={(e) => {
          setIdValue(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="name"
        value={nameValue}
        onChange={(e) => {
          setNameValue(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="price"
        value={priceValue}
        onChange={(e) => {
          setPriceValue(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
