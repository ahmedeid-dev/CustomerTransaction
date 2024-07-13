import { TextField } from "@mui/material";

export default function InputTextField({
filter,
setFilter,
}: {
filter?: string;
setFilter?: any;
}) {
return (
    <>
    <TextField
        label="Filter by Customer Name or Transaction Amount"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    />
    </>
);
}
