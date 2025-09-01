import { Box, CircularProgress } from "@mui/material"
import logo from "../../assets/flugo.svg"

const Loading = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor={"primary.main"}
    >
      <img src={logo} height={64} alt={'Carregando'} />
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress color="info" />
      </Box>
    </Box>
  )
}

export default Loading;