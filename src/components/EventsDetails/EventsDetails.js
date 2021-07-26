import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";

const EventsDetails = (props) => {
  const classes = useStyles();
  const { id } = props;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log("ROWS: ", rows);
  }, [rows]);

  const fetchData = async (name, id) => {
    const athlete_endpt = `https://mockend.com/catyuan/tokyo_olympics/athlete/${id}`;
    const country_endpt = `https://mockend.com/catyuan/tokyo_olympics/country/${id}`;
    const athlete_info = await fetch(athlete_endpt).then((response) =>
      response.json()
    );
    const country_info = await fetch(country_endpt).then((response) =>
      response.json()
    );
    const athlete = athlete_info.athlete_name;
    const country = country_info.country_name;
    return { name, athlete, country };
  };

  useEffect(() => {
    const createData = async () => {
      const gold = await fetchData("Gold", id);
      const silver = await fetchData("Silver", id + 1);
      const bronze = await fetchData("Bronze", id + 2);
      setRows([gold, silver, bronze]);
    };
    createData();
  }, [id]);

  const table = () => (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medal</TableCell>
            <TableCell align="right">Athlete</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.athlete}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const loading = () => <div className={classes.loading}>Loading data...</div>;

  return rows.length === 3 ? table() : loading();
};

export default EventsDetails;
