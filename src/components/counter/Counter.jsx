import React, { useState, useContext } from "react";
import styles from "../counter/Counter.module.scss";
import { ErrorBoundary } from "../../ErrorBoundary";
import { countContext } from "../../hooks/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(countContext);
  const [input, setInput] = useState("");

  const getInput = (e) => {
    setInput(parseInt(e.target.value));
    dispatch({ type: "setInput" });
  };

  return (
    <ErrorBoundary>
      <ErrorBoundary />
      <section className={styles.counter}>
        <h1>React Counter App</h1>

        <div className={styles.counter_card}>
          <div className={styles.counter_card__value}>
            <h3>The current value of the counter is:</h3>
            <p>{state.count.toLocaleString()}</p>
          </div>

          <div className={styles.counter_card__btn}>
            <div className={styles.counter_card__btn__1}>
              <div
                className={styles.counter_card__btn__increment}
                onClick={() => dispatch({ type: "increment" })}
              >
                +
              </div>
              <div
                className={styles.counter_card__btn__decrement}
                onClick={() => dispatch({ type: "decrement" })}
              >
                -
              </div>
            </div>
            <div className={styles.counter_card__btn__2}>
              <div className={styles.counter_card__btn__2_input}>
                <input
                  type="number"
                  id="input"
                  value={input}
                  onChange={getInput}
                  placeholder="setCount"
                />
              </div>
              <div
                className={styles.counter_card__btn__2_reset}
                onClick={() => dispatch({ type: "reset" })}
              >
                Reset
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Counter;
