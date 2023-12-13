import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Advice = () => {
  const [advice, setAdvice] = useState();
  async function fetchAdvice() {
    try {
      const response = await fetch("http://localhost:3000/api/advice", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setAdvice(result);
        console.log(advice);
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <p>{advice?.slip.id} </p>
      <p>{advice?.slip.advice} </p>
      <button onClick={fetchAdvice}>Another one!</button>
    </div>
  );
};

export default Advice;
