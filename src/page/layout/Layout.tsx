import { useState } from "react";
import BasicLineChart from "../../components/chart/Chart";
import DataTable from "../../components/table/Table";
import SearchNameField from "../../components/SearchNameField/SearchNameField";
import SearchAmountField from "../../components/SearchAmountField/SearchAmountField";
import { Helmet } from 'react-helmet';

export default function Layout() {
    const [filterName, setFilterName] = useState("");
    const [filterAmount, setFilterAmount] = useState("");
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    const handleRowClick = (customerId: any) => {
        setSelectedCustomerId(customerId);
    };

    return (
        <>
            {/* for Header information and SEO */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
            <div className="parent">
                <h1 className="title text-center py-4 mb-10 text-white text-3xl bg-blue-400">
                    Dashboard
                </h1>
                <div className="children flex px-10">
                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <SearchNameField
                                filterName={filterName}
                                setFilterName={setFilterName}
                            />
                            <SearchAmountField
                                filterAmount={filterAmount}
                                setFilterAmount={setFilterAmount}
                            />
                        </div>
                        <DataTable
                            filterName={filterName}
                            filterAmount={filterAmount}
                            onRowClick={handleRowClick}
                        />
                    </div>
                    <BasicLineChart id={selectedCustomerId} />
                </div>
            </div>
        </>
    );
}
