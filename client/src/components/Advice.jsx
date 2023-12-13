import { useState } from "react";
import { mobile, desktop, dice } from "../images";

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
    <div className="bg-dark-grayish-blue w-[550px] px-12 py-7 rounded-lg">
      <p className="text-base font-extrabold leading-normal text-center uppercase text-neon-green">
        {`Advice #${advice?.slip.id}`}
      </p>
      <p className="text-center text-[28px] leading-normal font-extrabold text-light-cyan mt-4">
        {advice?.slip.advice}{" "}
      </p>
      <img src={desktop} alt="divider" className="w-full mt-4" />
      <img src={dice} alt="dice" />
      <button onClick={fetchAdvice}>Another one!</button>
    </div>
  );
};

export default Advice;
