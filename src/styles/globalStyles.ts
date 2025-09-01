// External Libraries
import type { ThemeOptions } from "@mui/material/styles";

export const globalStyles: ThemeOptions = {
  typography: {
    fontFamily: "Public Sans, sans-serif",
    h4: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
      letterSpacing: "0px",
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0px",
    },
    body2: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0px",
    },
    subtitle2: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Public Sans, sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          padding: 16,
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          lineHeight: "26px",
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "24px",
        },
        body: {
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "22px",
          verticalAlign: "middle",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0px",
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Public Sans, sans-serif',
          fontWeight: 400,
          fontStyle: 'Regular',
          fontSize: '14px',
          lineHeight: '22px',
          letterSpacing: '0px'
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0px",
          verticalAlign: "middle",
        },
      },
    }
  },
};


// const textVariants = {
//   h4: {
//     font-family: Public Sans;
//     font-weight: 700;
//     font-style: Bold;
//     font-size: 24px;
//     leading-trim: NONE;
//     line-height: 36px;
//     letter-spacing: 0px;
//   },
//   body1: {
//     font-family: Inter;
//     font-weight: 500;
//     font-size: 12px;
//     leading-trim: NONE;
//     line-height: 16px;
//     letter-spacing: 0%;
//   },
//   body2: {
//     font-family: Public Sans;
//     font-weight: 400;
//     font-style: Regular;
//     font-size: 14px;
//     leading-trim: NONE;
//     line-height: 22px;
//     letter-spacing: 0px;
//   },
//   subtitle2: {
//     font-family: Public Sans;
//     font-weight: 600;
//     font-style: SemiBold;
//     font-size: 14px;
//     leading-trim: NONE;
//     line-height: 22px;
//     letter-spacing: 0px;
//   },
//   nav-itens-default: {
//     font-family: Public Sans;
//     font-weight: 500;
//     font-style: Medium;
//     font-size: 14px;
//     leading-trim: NONE;
//     line-height: 22px;
//     letter-spacing: 0px;
//     vertical-align: middle;
//   },
//   table-head: {
//     font-family: Public Sans;
//     font-weight: 600;
//     font-style: SemiBold;
//     font-size: 14px;
//     leading-trim: NONE;
//     line-height: 24px;
//     letter-spacing: 0px;
//   },
//   label-text: {
//     font-family: Public Sans;
//     font-weight: 700;
//     font-style: Bold;
//     font-size: 12px;
//     leading-trim: NONE;
//     line-height: 20px;
//     letter-spacing: 0px;
//     text-align: center;
//   },
//   button-large: {
//     font-family: Public Sans;
//     font-weight: 700;
//     font-style: Bold;
//     font-size: 15px;
//     leading-trim: NONE;
//     line-height: 26px;
//     letter-spacing: 0px;
//   },
// }
