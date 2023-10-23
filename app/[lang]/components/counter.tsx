"use client";

import { useState } from "react";

import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";

export default function Counter({
  dictionary,
}: {
  dictionary: {
    increment: string;
    decrement: string;
  };
}) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <p>
      This compoment is rendered on client:
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        {dictionary.decrement}
      </button>
      {count}
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        {dictionary.increment}
      </button>
    </p>
  );
}
