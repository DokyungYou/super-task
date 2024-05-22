import React, { useState } from "react";

const PaymentFormCheckbox = ({ getProductType }) => {
  const [state, setState] = useState([]);

  const checkboxHandler = (event) => {
    const types = [...state, event.target.value];
    setState(types);
    getProductType(state);
    // getProductType(event.target.value);
  };
  return (
    <div>
      <label for="luxury">사치품</label>
      <input
        type="checkbox"
        id="luxury"
        name="product-type"
        value="luxury"
        onChange={checkboxHandler}
      />

      <label for="stationery">학용품</label>
      <input
        type="checkbox"
        id="stationery"
        name="product-type"
        value="stationery"
        onChange={checkboxHandler}
      />

      <label for="cleaning">청소용품</label>
      <input
        type="checkbox"
        id="cleaning"
        name="product-type"
        value="cleaning"
        onChange={checkboxHandler}
      />
    </div>
  );
};

export default PaymentFormCheckbox;
