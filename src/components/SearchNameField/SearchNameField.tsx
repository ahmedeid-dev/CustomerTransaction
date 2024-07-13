import { TextField } from "@mui/material";

export default function SearchNameField({
    filterName,
setFilterName,
}: {
    filterName?: string;
setFilterName?: any;
}) {
return (
    <>
    <TextField
        label="Filter by Customer Name "
        variant="outlined"
        fullWidth
        margin="normal"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
    />
    </>
);
}
