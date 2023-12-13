import Advice from "./components/Advice";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-dark-blue font-manrope">
      <Advice advice={"do something"} num={123} />
    </div>
  );
}
