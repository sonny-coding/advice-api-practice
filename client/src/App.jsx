import Advice from "./components/Advice";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline font-manrope">
        Hello world!
      </h1>
      <Advice advice={"do something"} num={123} />
    </>
  );
}
