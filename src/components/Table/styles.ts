// External Libraries
import { styled } from '@mui/material/styles';
import { Avatar, Chip, Paper, Table, TableCell, TableContainer, TableRow } from '@mui/material';

// Interfaces
import type { StyledChipProps } from '../../interfaces/TableProps';

export const StyledTableContainer = styled(TableContainer)({
  marginTop: 32,
  borderRadius: 16,
  overflow: 'auto',
}).withComponent(Paper);

export const StyledTable = styled(Table)(({ theme }) => ({
  borderCollapse: "separate",
  borderSpacing: 0,
  tableLayout: "fixed",

  [theme.breakpoints.down(1440)]: {
    tableLayout: "auto",
  },
}));

export const StyledAvatar = styled(Avatar)({
  height: 40,
  width: 40,
  marginRight: '8px',
});

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&.MuiTableRow-head': {
    height: 56,

    '&:first-of-type': {
      '& .MuiTableCell-root:first-of-type': {
        borderTopLeftRadius: 16,
      },
      '& .MuiTableCell-root:last-of-type': {
        borderTopRightRadius: 16,
      },
    },
  },

  '&.MuiTableRow-body': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: 72,

    '&:last-of-type': {
      '& .MuiTableCell-root:first-of-type': {
        borderBottomLeftRadius: 16,
      },
      '& .MuiTableCell-root:last-of-type': {
        borderBottomRightRadius: 16,
      },
    },
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,

  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },

  '&.MuiTableCell-body': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

export const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "status",
})<StyledChipProps>(({ theme, status }) => ({
  borderRadius: 6,
  height: 24,
  fontSize: 12,
  fontWeight: 600,
  ...(status === "Ativo"
    ? {
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.contrastText,
      }
    : {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.contrastText,
      }),
}));