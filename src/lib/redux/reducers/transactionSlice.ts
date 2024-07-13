import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getTransactions = createAsyncThunk(
  "TransactionSlice/getTransactions",
  async () => {
    try {
      const response = await axios.get(
        "https://ahmedeid-dev.github.io/CustomerTransactionDatabase/transactions.json"
      );
      return response.data;
    } catch (error) {
      console.error("getTransactions error", error);
    }
  }
);

const TransactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    transaction: {},
    transactionLoading: false,
    transactionError: null,
  },
  reducers: {
    cleartransaction: (state) => {
      state.transaction = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state: any, action: any) => {
      state.transactions = action.payload;
      state.transactionLoading = false;
      state.transactionError = null;
    });

    builder.addCase(getTransactions.pending, (state: any) => {
      state.transactionLoading = true;
    });

    builder.addCase(getTransactions.rejected, (state: any, action: any) => {
      state.transactionLoading = false;
      state.transactionError = action.error.message;
    });
  },
});

export const { cleartransaction } = TransactionSlice.actions;

export { getTransactions };
export default TransactionSlice.reducer;
