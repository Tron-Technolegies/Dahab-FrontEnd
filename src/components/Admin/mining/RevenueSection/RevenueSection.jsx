import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllRevenue from "../../../../hooks/adminMining/useGetAllRevenue";
import Loading from "../../../Loading";
import useAddRevenue from "../../../../hooks/adminMining/useAddRevenue";
import { toast } from "react-toastify";
import PaginationComponent from "../PaginationComponent";

export default function RevenueSection() {
  const [page, setPage] = useState(1);
  const { loading, refetch, revenues, totalPages } = useGetAllRevenue({
    currentPage: page,
  });
  const [amount, setAmount] = useState(0);
  const [hashRate, setHashRate] = useState(89960);
  const { loading: addLoading, addRevenue } = useAddRevenue();

  function handlePageChange(event, value) {
    setPage(value);
  }

  useEffect(() => {
    refetch();
  }, [page]);

  const handleAdd = async () => {
    if (amount === 0 || hashRate === 0) {
      toast.error("Amount or hashrate cant be zero");
      return;
    }
    await addRevenue({ amount, hashRate });
    setAmount("");
    refetch();
  };
  return (
    <div className="p-5 ">
      <div className="flex flex-col gap-2 border-b border-homeBg pb-5">
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">Enter Todays Revenue:</label>
          <input
            className="p-2 rounded-lg"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">
            Enter Todays HashRate(TH/s):
          </label>
          <input
            className="p-2 rounded-lg"
            type="number"
            value={hashRate}
            disabled
          />
        </div>
        <button
          onClick={handleAdd}
          className="px-3 py-2 bg-homeBg text-white rounded-md w-fit ms-auto"
        >
          Submit
        </button>
        {addLoading && <Loading />}
      </div>

      <p className="text-lg my-5">Revenue History</p>
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    width: "12.5%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {revenues?.map((x) => (
                <TableRow
                  key={x._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.date.slice(0, 10)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ width: "12.5%", textAlign: "center" }}
                  >
                    {x.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div className="my-5">
        {totalPages > 1 && (
          <PaginationComponent
            page={page}
            totalPage={totalPages}
            pageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
