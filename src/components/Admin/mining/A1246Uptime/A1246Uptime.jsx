import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetUptime from "../../../../hooks/adminMining/useGetUptime";
import Loading from "../../../Loading";
import useAddNewUptime from "../../../../hooks/adminMining/useAddNewUptime";
import { toast } from "react-toastify";

export default function A1246Uptime() {
  const { loading, uptime, refetch } = useGetUptime();
  const { loading: addLoading, addUptime } = useAddNewUptime();
  const [history, setHistory] = useState([]);
  const [newUptime, setNewUptime] = useState(0);

  useEffect(() => {
    if (uptime && uptime.uptimeHistory) {
      setHistory(uptime.uptimeHistory.reverse());
    }
  }, [loading, uptime]);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-2 border-b border-homeBg pb-5 my-5">
        <div className="flex justify-between gap-5 items-center">
          <label className="text-lg font-semibold">
            Enter Todays A1246 Uptime (0 - 100):
          </label>
          <input
            className="p-2 rounded-lg"
            type="number"
            value={newUptime}
            onChange={(e) => setNewUptime(e.target.value)}
          />
        </div>

        <button
          onClick={async () => {
            if (newUptime < 0) {
              toast.error("Unable to add Uptime below 0 percent");
              return;
            }
            if (newUptime > 100) {
              toast.error("Unable to add Uptime above 100 percent");
              return;
            }
            await addUptime({ uptime: Number(newUptime / 100) });
            refetch();
          }}
          className="px-3 py-2 bg-homeBg text-white rounded-md w-fit ms-auto"
        >
          Submit
        </button>
        {addLoading && <Loading />}
      </div>
      <p className="text-lg font-semibold">Uptime History</p>
      {loading ? (
        <Loading />
      ) : (
        uptime &&
        uptime.uptimeHistory && (
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
                    Uptime (%)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history?.map((x) => (
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
                      <div>
                        <p>
                          {new Date(x.date).toLocaleDateString(
                            "en-Us",
                            options
                          )}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "12.5%", textAlign: "center" }}
                    >
                      {x.uptime * 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </div>
  );
}
