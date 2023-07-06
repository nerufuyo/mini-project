import { Box } from "@mui/material";
import Header from "./pages/Header";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Box width={"100vw"} height={"100vh"} sx={{ bgcolor: "MenuText" }}>
      <Header />
      <Layout />
    </Box>
  );
};

export default App;
