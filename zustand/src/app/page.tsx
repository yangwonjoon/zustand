"use client";

import { useCounterStore } from "@/store/counterStore";

// const App = () => {
  
//   const { count, increase } = useCounterStore();

//   // const count = useCounterStore((state) => state.count);
//   // const increase = useCounterStore((state) => state.increase);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-8">
//       {count} <button onClick={increase}>B에서 +1</button>
//     </div>
//   );
// };



const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <CounterA />
      <CounterB />
    </div>
  );
};

const CounterA = () => {
  const count = useCounterStore((state) => state.count);
  return <p>A 컴포넌트: {count}</p>;
};

const CounterB = () => {
  const increase = useCounterStore((state) => state.increase);
  return <button onClick={increase}>B에서 +1</button>;
};

export default App;
