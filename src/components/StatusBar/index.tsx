// External Libraries
import { LinearProgress, Typography } from "@mui/material";
import { StatusBarContainer, ProgressContainer } from "./styles";

// Interfaces
import type { StatusBarProps } from "../../interfaces/StatusBarProps";

const StatusBar = (props: StatusBarProps) => {
  const progress = Math.round(((props.currentStep + 1) / props.totalSteps) * 100);

  return (
    <StatusBarContainer>
      <ProgressContainer>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ flexGrow: 1 }}
        />
        <Typography variant="caption">{progress}%</Typography>
      </ProgressContainer>
    </StatusBarContainer>
  );
}

export default StatusBar;
