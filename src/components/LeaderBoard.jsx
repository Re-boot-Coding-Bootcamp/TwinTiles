import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import theme from "../theme";

const LeaderBoard = ({ level, data }) => {
  const sortedRows = useMemo(() => {
    if (data && data.length > 0) {
      return data.sort((a, b) => a.time - b.time).slice(0, 10);
    } else {
      return [];
    }
  }, [data]);

  return (
    <Box id="leader-board">
      <Typography color="white" variant="subtitle1" textAlign="center" mb={1}>
        {level} leader board
      </Typography>
      <TableContainer component={Paper} sx={{ width: 1 }}>
        <Table
          sx={{
            width: 280,
            [theme.breakpoints.down("md")]: {
              width: 200,
            },
            [theme.breakpoints.down("sm")]: {
              width: 300,
            },
          }}
        >
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              sortedRows.map((row, index) => (
                <TableRow
                  key={`${row.name}-${index}`}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { LeaderBoard };
