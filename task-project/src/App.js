import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2023, 3, 14),
      color: "미정",
      type: ["ㅐ", "ㅐ"],
      paymentMethod: "advance",
    },
  ]);

  const getPaymentFormData = (data) => {
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),

        // 새로 추가
        color: data.color,
        type: data.type,
        paymentMethod: data.paymentMethod,
      },
      ...expenses,
    ]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
