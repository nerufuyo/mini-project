import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./pages/Header";
import Layout from "./pages/Layout";
import Footer from "./pages/Footer";

const theme = createTheme({
  palette: {
    background: {
      default: "#0F0F0F",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default" }}>
        <Header />
        <Layout />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
