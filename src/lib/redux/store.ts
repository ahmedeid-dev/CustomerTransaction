import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./reducers/customerSlice";
import transactionSlice from "./reducers/transactionSlice";

// for state management
export const store = configureStore({
reducer: {
    customers: customerSlice,
    transactions: transactionSlice,
},
});
