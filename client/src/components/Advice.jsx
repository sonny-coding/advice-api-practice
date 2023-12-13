import { useState, useEffect } from "react";
import { mobile, desktop, dice } from "../images";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types
const Advice = () => {
  const [advice, setAdvice] = useState();
  const [loading, isLoading] = useState(false);
  async function fetchAdvice() {
    isLoading(true);
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
    } finally {
      isLoading(false);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="relative bg-dark-grayish-blue w-[550px] h-fit min-h-[250px] px-12 py-7 rounded-lg">
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="w-full">
          <p className="text-base font-extrabold leading-normal text-center uppercase text-neon-green">
            {`Advice #${advice?.slip.id}`}
          </p>
          <p className="text-center text-[28px] leading-normal font-extrabold text-light-cyan mt-4">
            {advice?.slip.advice}{" "}
          </p>
        </div>
      )}

      <img src={desktop} alt="divider" className="w-full my-6" />
      <div
        onClick={fetchAdvice}
        className="absolute bottom-[-1.5em] left-[50%] translate-x-[-50%] rounded-full cursor-pointer hover:shadow-neon w-14 h-14 bg-neon-green px-4 py-4"
      >
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};

export default Advice;
