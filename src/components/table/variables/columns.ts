import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
{
    field: "id",
    align: "center",
    headerClassName:"text-xl bg-blue-400 text-white",
    headerAlign: "center",
    resizable: false,
    headerName: "ID",
    width: 250,
},
{
    field: "name",
    align: "center",
    headerClassName:"text-xl bg-blue-400 text-white",
    headerAlign: "center",
    resizable: false,
    headerName: "Customer Name",
    width: 250,
},
{
    field: "amount",
    align: "center",
    headerClassName:"text-xl bg-blue-400 text-white",
    headerAlign: "center",
    resizable: false,
    headerName: "Transaction Amount",
    width: 250,
},
{
    field: "date",
    align: "center",
    headerClassName:"text-xl bg-blue-400 text-white",
    headerAlign: "center",
    resizable: false,
    headerName: "Transaction Date",
    width: 250,
},
];
