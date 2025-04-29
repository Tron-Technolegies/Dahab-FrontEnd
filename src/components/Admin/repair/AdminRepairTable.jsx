import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import useTimeElapsed from "../../../hooks/useTimeElapsed";
import { formatTimeElapsed, getTimeElapsed } from "../../../utils/timeFunction";
import useSetPriority from "../../../hooks/adminRepair/useSetPriority";
import Loading from "../../Loading";
import { useDispatch } from "react-redux";
import { setRefetchTrigger } from "../../../slices/adminSlice";

export default function AdminRepairTable({ miners }) {
  const [editTrue, setEditTrue] = useState(false);
  const [editId, setEditId] = useState("");
  const [priority, setPriority] = useState(0);
  const { loading, setPriority: updatePriority } = useSetPriority();
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{
                width: "16.6%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Serial No
            </TableCell>
            {/* <TableCell
              sx={{
                width: "12.5%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Mac Address
            </TableCell> */}
            {/* <TableCell
              sx={{
                width: "12.5%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Worker ID
            </TableCell> */}
            <TableCell
              sx={{
                width: "16.6%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Owner
            </TableCell>
            <TableCell
              sx={{
                width: "16.6%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Priority
            </TableCell>
            <TableCell
              sx={{
                width: "16.6%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Time In Repair
            </TableCell>
            <TableCell
              sx={{
                width: "16.6%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Status
            </TableCell>
            <TableCell
              sx={{
                width: "16.6%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {miners.map((x) => (
            <TableRow
              key={x._id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16.6%", textAlign: "center" }}
              >
                {x.serialNumber}
              </TableCell>
              {/* <TableCell
                component="th"
                scope="row"
                sx={{ width: "12.5%", textAlign: "center" }}
              >
                {x.macAddress}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "12.5%", textAlign: "center" }}
              >
                {x.workerId}
              </TableCell> */}
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16.6%", textAlign: "center" }}
              >
                {x.owner}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16.6%", textAlign: "center" }}
              >
                {x.priority ? (
                  <div className="flex justify-center gap-5 items-center">
                    <p
                      className={`${editTrue && editId === x._id && "hidden"} `}
                    >
                      {x.priority}
                    </p>
                    <button
                      className={`px-4 py-1 bg-homeBg rounded-md text-white ${
                        editTrue && editId === x._id && "hidden"
                      }`}
                      onClick={() => {
                        setEditTrue(true);
                        setEditId(x._id);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      className={`px-4 py-1 bg-homeBg rounded-md text-white ${
                        editTrue && editId === x._id && "hidden"
                      }`}
                      onClick={() => {
                        setEditTrue(true);
                        setEditId(x._id);
                      }}
                    >
                      Add
                    </button>
                  </>
                )}
                {editTrue && editId === x._id && (
                  <div className="">
                    <input
                      type="number"
                      className="px-2 py-1 bg-gray-300 my-2 rounded-lg"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    />
                    <button
                      className="px-2 py-1 bg-homeBg rounded-md text-white"
                      onClick={async () => {
                        await updatePriority({ id: x._id, priority });
                        dispatch(setRefetchTrigger());
                        setEditId("");
                        setEditTrue("");
                      }}
                    >
                      Set
                    </button>
                    {loading && <Loading />}
                  </div>
                )}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16.6%", textAlign: "center" }}
              >
                {formatTimeElapsed(getTimeElapsed(x.createdAt))}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16.6%", textAlign: "center" }}
              >
                {x.status}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "16.6%", textAlign: "center" }}
              >
                <Link
                  to={`/admin/repair/status/${x._id}`}
                  className="px-4 py-2 rounded-md bg-homeBg hover:bg-homeBgGradient text-white"
                >
                  Action
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
