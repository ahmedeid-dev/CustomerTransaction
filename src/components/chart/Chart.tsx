import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
export default function BasicLineChart({ id }: { id: any }) {
    const { customers, customerLoading, customerError } = useSelector((state: any) => state.customers);
    const [rows, setRows] = useState<any[]>([]);
    const [yAxisData, setYAxisData] = useState<any[]>([]);
    const [xAxisData, setXAxisData] = useState<any[]>([]);
    const { transactions, transactionLoading, transactionError } = useSelector(
        (state: any) => state.transactions
    );

    useEffect(() => {
        if (customers?.customers?.length && transactions?.transactions?.length && id) {
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
            const clicked = finalRow.filter((row: any) => {
                return row.customer_id === id;
            });
            setRows(clicked);
        }
    }, [customers, transactions, id]);

    useEffect(() => {
        const yAxisArray: any[] = [];
        const xAxisArray: any[] = [];
        rows.map((row: any) => {
            xAxisArray.push(row.date);
            yAxisArray.push(row.amount);
            setYAxisData(yAxisArray);
            setXAxisData(xAxisArray);
        });
    }, [rows]);

    const xData = xAxisData.map((x) => x.split("-").slice(2))
    
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
        <LineChart
            loading={customerLoading || transactionLoading}
            xAxis={[{ label: "Date", data: xData.length == 1 ? [...xData, 3, 4, 5, 6] : xData.length ? xData : [1, 2, 3, 4, 5, 6] }]}
            series={[
                {
                    color: "red",
                    label: "Amount",
                    data: yAxisData.length == 1 ? [...yAxisData, 3, 4, 5, 6] : yAxisData.length ? yAxisData : [1, 2, 3, 4, 5, 6],
                },
            ]}
            width={600}
            height={500}
        />
    );
}
