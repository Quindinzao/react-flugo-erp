// External Libraries
import { Typography, Box, CircularProgress } from "@mui/material";

// Interfaces
import type { LoadingErrorProps } from "../../interfaces/LoadingErrorProps";

const LoadingErrorWrapper = ({ loading, error, children }: LoadingErrorProps) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return <Box>{children}</Box>;
};

export default LoadingErrorWrapper;
