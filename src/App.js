import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./pages/Header";
import Layout from "./pages/Layout";

const theme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default" }}>
        <Header />
        <Layout />
      </Box>
    </ThemeProvider>
  );
};

export default App;
