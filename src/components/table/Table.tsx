import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./variables/columns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../lib/redux/reducers/customerSlice";
import { getTransactions } from "../../lib/redux/reducers/transactionSlice";
import Loader from "../loader/Loader";
export default function DataTable({
  filterName,
  filterAmount,
  onRowClick,
}: {
  filterName: string;
  filterAmount: string;
  onRowClick: (customerId: number) => void;
}) {
  const dispatch = useDispatch<any>();
  const { customers, customerLoading, customerError } = useSelector(
    (state: any) => state?.customers
  );
  const [rows, setRows] = useState<any[]>([]);
  const { transactions, transactionLoading, transactionError } = useSelector((state: any) => state?.transactions);

  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    if (customers?.customers?.length && transactions?.transactions?.length) {
      const finalRow = transactions?.transactions?.map((transaction: any) => {
        const customer = customers?.customers?.find((cust: any) => {
          return transaction.customer_id == cust.id;
        });

        return {
          id: transaction.id,
          customer_id: customer.id,
          main_id: "transaction.id",
          name: customer?.name,
          amount: transaction.amount,
          date: transaction.date,
        };
      });
      setRows(finalRow);
    }
  }, [customers, transactions]);

  const filteredRows = rows.filter((row) => {
    if (filterName && !filterAmount) {
      return row.name.toLowerCase().includes(filterName.toLowerCase());
    } else if (!filterName && filterAmount) {
      return row.amount.toString().includes(filterAmount);
    } else {
      return (
        row.name.toLowerCase().includes(filterName.toLowerCase()) &&
        row.amount.toString().includes(filterAmount)
      );
    }
  });
  const handleRowClick = (params: any) => {
    const customerId = params.row.customer_id;
    onRowClick(customerId);
  };
  // loading spinner
  if (customerLoading || transactionLoading) {
    return <Loader />;
  }
  if (customerError || transactionError) {
    return (
      <>
        <div className="flex justify-center align-middle font-extrabold">
          <h3 className="text-10xl">{customerError || transactionError}</h3>
        </div>
      </>
    );
  }
  return (
    <div>
      <DataGrid
        autoHeight
        rowHeight={60}
        rows={filteredRows}
        loading={customerLoading || transactionLoading}
        columns={columns}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
}
