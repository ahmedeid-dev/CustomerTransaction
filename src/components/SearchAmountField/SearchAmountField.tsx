import { TextField } from "@mui/material";

export default function SearchAmountField({
    filterAmount,
setFilterAmount,
}: {
    filterAmount?: string;
setFilterAmount?: any;
}) {
return (
    <>
    <TextField
        label="Filter by Transaction Amount"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filterAmount}
        onChange={(e) => setFilterAmount(e.target.value)}
    />
    </>
);
}
