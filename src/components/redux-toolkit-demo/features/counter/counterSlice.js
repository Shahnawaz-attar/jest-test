import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count > 0 ? (state.count -= 1) : (state.count = 0);
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

//export Actions and Reducer

export const { increament, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
