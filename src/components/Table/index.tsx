// External Libraries
import { useState } from "react";
import {
  TableBody,
  TableHead,
  Box,
  Button,
  Stack
} from "@mui/material";

// Interfaces
import type {
  CellProps,
  ColumnBodyProps,
  ColumnHeaderProps,
  TableProps
} from "../../interfaces/TableProps";

// Styles
import {
  StyledAvatar,
  StyledChip,
  StyledTable,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from "./styles";

const Table = (props: TableProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortColumnIndex, setSortColumnIndex] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const rowsPerPage = 10;
  const pageCount = Math.ceil(props.columnBody.length / rowsPerPage);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  const handleSort = (index: number) => {
    if (sortColumnIndex === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumnIndex(index);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...props.columnBody].sort((a, b) => {
    if (sortColumnIndex === null) return 0;

    const aCell = a.rows[sortColumnIndex];
    const bCell = b.rows[sortColumnIndex];

    if (!aCell || !bCell) return 0;

    const aValue = aCell.value.toString().toLowerCase();
    const bValue = bCell.value.toString().toLowerCase();

    return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  const currentRows = sortedRows.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  return (
    <StyledTableContainer>
      <StyledTable>
        <TableHead>
          <StyledTableRow>
            {props.columnHeader.map((column: ColumnHeaderProps, index) => (
              <StyledTableCell
                key={index}
                align={column.align}
                sx={{ width: `${100 / props.columnHeader.length}%`, cursor: "pointer" }}
                onClick={() => handleSort(index)}
              >
                {column.name} {sortColumnIndex === index ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {currentRows.map((row: ColumnBodyProps, rowIndex: number) => (
            <StyledTableRow key={rowIndex}>
              {row.rows.map((cell: CellProps, cellIndex: number) => (
                <StyledTableCell key={cellIndex} align={cell.align}>
                  {cell.type === "avatar" && (
                    <Box display="flex" alignItems="center">
                      <StyledAvatar alt={cell.value} src={cell.value} />
                      {cell.value}
                    </Box>
                  )}
                  {cell.type === "badge" && <StyledChip label={cell.value} status={cell.value as "Ativo" | "Inativo"} />}
                  {(cell.type === "normal" || cell.type === undefined) && cell.value}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>

      <Stack direction="row" spacing={2} justifyContent="center" my={2}>
        <Button variant="contained" onClick={handlePrevPage} disabled={currentPage === 0}>
          Anterior
        </Button>
        <Button variant="contained" onClick={handleNextPage} disabled={currentPage >= pageCount - 1}>
          Próximo
        </Button>
      </Stack>
    </StyledTableContainer>
  );
};

export default Table;