import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getCustomers = createAsyncThunk(
"CustomerSlice/getCustomers",
async () => {
    try {
    const response = await axios.get(
        "https://ahmedeid-dev.github.io/CustomerTransactionDatabase/customers.json"
        );
        
    return response.data;
    } catch (error) {
    console.error("getCustomers error", error);
    }
}
);

const CustomerSlice = createSlice({
name: "customers",
initialState: {
    customers: [],
    customer: {},
    customerLoading: false,
    customerError: null,
},
reducers: {
    clearcustomer: (state) => {
    state.customer = {};
    },
},
extraReducers: (builder) => {
    builder.addCase(getCustomers.fulfilled, (state: any, action: any) => {
        state.customers = action.payload;
        state.customerLoading = false;
        state.customerError = null;
    })

    builder.addCase(getCustomers.pending, (state: any) => {
        state.customerLoading = true;
        state.customerError = null;
    })

    builder.addCase(getCustomers.rejected, (state: any, action: any) => {
        state.customerLoading = false;
        state.customerError = action.error.message;
    })
},
});

export const { clearcustomer } = CustomerSlice.actions;

export { getCustomers };
export default CustomerSlice.reducer;
