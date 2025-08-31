// External Libraries
import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 33,
  height: 20,
  padding: 0,
  marginRight: 9,
  marginLeft: 12,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 3,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(13px)",
      color: theme.palette.background.default,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 14,
    height: 14,
  },
  "& .MuiSwitch-track": {
    borderRadius: 10,
    backgroundColor: theme.palette.grey[400],
    opacity: 1,
  },
  "& .MuiFormControlLabel": {
    marginLeft: 8,
  },
}));
