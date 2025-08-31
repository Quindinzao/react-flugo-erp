// External Libraries
import {
  TableBody,
  TableHead,
  Box
} from '@mui/material';

// Interfaces
import type {
  CellProps,
  ColumnBodyProps,
  ColumnHeaderProps,
  TableProps
} from '../../interfaces/TableProps';

// Styles
import {
  StyledAvatar,
  StyledChip,
  StyledTable,
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from './styles';

const Table = (props: TableProps) => {
  return (
    <StyledTableContainer>
      <StyledTable>
        <TableHead>
          <StyledTableRow>
            {props.columnHeader.map((columnHeader: ColumnHeaderProps, index: number) => {
              return (
                <StyledTableCell
                  key={index}
                  align={columnHeader.align}
                  sx={{ width: `${100 / props.columnHeader.length}%` }}
                >
                  {columnHeader.name}
                </StyledTableCell>
              )
            })}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {props.columnBody.map((item: ColumnBodyProps, index: number) => (
            <StyledTableRow key={index}>
              {item.rows.map((cell: CellProps) => {
                return (
                  <StyledTableCell align={cell.align}>
                    {cell.type === 'avatar' && (
                      <Box display="flex" flexDirection="row" alignItems="center">
                        <StyledAvatar alt={cell.value} src={cell.value} />
                        {cell.value}
                      </Box>
                    )}
                    {cell.type === 'badge' && (
                      <StyledChip label={cell.value} status={cell.value as "Ativo" | "Inativo"} />
                    )}
                    {cell.type === 'normal' || cell.type === undefined && cell.value}
                  </StyledTableCell>
                 )
              })}
            </StyledTableRow>
          ))}
      </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default Table;