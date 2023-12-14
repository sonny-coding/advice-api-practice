import { useState, useEffect } from "react";
import { mobile, desktop, dice } from "../images";
import Loader from "./Loader";
import useScreenSize from "../hooks/useScreenSize";

// eslint-disable-next-line react/prop-types
const Advice = () => {
  const isLargeScreen = useScreenSize().width >= 365;
  const [advice, setAdvice] = useState();
  const [loading, isLoading] = useState(false);
  async function fetchAdvice() {
    isLoading(true);
    try {
      const response = await fetch("http://192.168.0.157:3000/api/advice", {
        // 192.168.0.157
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
    <div className="relative bg-dark-grayish-blue w-full mx-4 md:w-[550px] h-fit min-h-[250px] px-12 py-7 rounded-lg">
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="w-full">
          <p className="text-sm font-bold text-center uppercase md:text-base md:font-extrabold text-neon-green">
            {`Advice #${advice?.slip.id}`}
          </p>
          <p className="mt-4 text-2xl font-bold text-center md:text-3xl md:font-extrabold text-light-cyan">
            {advice?.slip.advice}{" "}
          </p>
        </div>
      )}
      {isLargeScreen ? (
        <img src={desktop} alt="divider" className="w-full my-6" />
      ) : (
        <img src={mobile} alt="divider" className="w-full my-6" />
      )}

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
