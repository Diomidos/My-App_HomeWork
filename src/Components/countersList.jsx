import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const hendeleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const hendeleReset = () => {
    setCounters(initialState);
    // console.log("hendele reset");
  };

  const handleIncrement = (id) => {
    const newState = counters.map((counter) => {
      if (id === counter.id) {
        counter.value++;
      }
      return counter;
    });
    setCounters(newState);
  };

  const handleDecrement = (id) => {
    const newState = counters.map((counter) => {
      if (id === counter.id) {
        counter.value--;
      }
      return counter;
    });
    setCounters(newState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={hendeleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={hendeleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
