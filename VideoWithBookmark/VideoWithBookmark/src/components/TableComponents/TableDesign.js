import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const TableDialog = (props) => {
  const tableData = [
    {id:"1", sessionName: "name1", sessionLink: "add1" },
    {id:"2",sessionName: "name2", sessionLink: "add1" },
    {id:"3",sessionName: "name3", sessionLink: "add1" },
    {id:"4",sessionName: "name4", sessionLink: "add1" },
    {id:"5",sessionName: "name5", sessionLink: "add1" },
    {id:"6",sessionName: "name6", sessionLink: "add1" },
    
  ];
  const handleRowClick = () => {
    props.history.push("/videodisplay");
  };
  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Sno</TableCell>
            <TableCell align="center">Live Sessions Attended</TableCell>
            <TableCell align="center">Access Recordings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            // <TableRow key={row.id} onClick={handleRowClick}>
            <TableRow key={row.id} >
              <TableCell component="th" scope="row">
                {tableData.indexOf(row) + 1}
              </TableCell>
              <TableCell align="center">{row.sessionName}</TableCell>
              <TableCell align="center" onClick={handleRowClick}>{row.sessionLink}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default TableDialog;