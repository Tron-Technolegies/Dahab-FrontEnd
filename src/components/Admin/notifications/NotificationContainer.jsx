import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../../Loading";
export default function NotificationContainer({ data, isLoading }) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };
  return isLoading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Notification
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.notifications?.map((x) => (
            <TableRow
              key={x._id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ textAlign: "center" }}
              >
                <div>
                  <p>
                    {new Date(x.createdAt).toLocaleDateString("en-Us", options)}
                  </p>
                </div>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ textAlign: "center", maxWidth: "300px" }}
              >
                {x.notification}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{ textAlign: "center" }}
              >
                {x.isRead ? (
                  <p> ✅</p>
                ) : (
                  <button className="bg-blue-500 p-2 rounded-md text-white">
                    Mark Read
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
