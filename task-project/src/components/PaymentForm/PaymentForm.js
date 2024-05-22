import React, { useState } from "react";

import "./PaymentForm.css";
import PaymentFormCheckbox from "./PaymentFormCheckbox";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "ㅇㅇ",
    price: 1,
    today: new Date(),

    // 새로 추가
    color: "뭐가문제니",
    type: [],
    paymentMethod: "",
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  // 지불방식
  const paymentMethodHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      paymentMethod: event.target.value,
    }));
  };

  // 상품타입
  const getProductType = (data) => {
    setObjectState((prevState) => ({
      ...prevState,
      type: data,
    }));

    // const types = [...objectState.type, data];
    // setObjectState((prevState) => ({
    //   ...prevState,
    //   type: types,
    // }));
  };

  // 상품색상
  const colorHandelr = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
          <div>
            <label for="colorSelector"> 상품 색상 </label>
            <input type="color" id="colorSelector" onChange={colorHandelr} />
          </div>
          <div className="new-payment__control">
            <PaymentFormCheckbox getProductType={getProductType} />
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="deferred"
                name="delivery-charges"
                value="deferred"
                onChange={paymentMethodHandler}
              />
              <label for="deferred">후불</label>
            </div>

            <div>
              <input
                type="radio"
                id="advance"
                name="delivery-charges"
                value="advance"
                onChange={paymentMethodHandler}
              />
              <label for="advance">선불</label>
            </div>
          </div>
        </div>
        <div className="new-payment__actions">
          <div className="new-payment__payment of delivery"></div>
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

// advance payment 선불
// payment 착불
export default PaymentForm;
