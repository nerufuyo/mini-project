import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputBase,
  IconButton,
  Typography,
  Link,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import Logo from "../assets/logo512.png";

const StyledLink = styled(Link)({
  "&:hover": {
    backgroundColor: "red",
  },
});

const Header = () => {
  return (
    <Box sx={{ px: 52, py: 2 }}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Stack direction="row" gap={1} marginRight={2} alignItems="center">
            <img src={Logo} alt="Re-Flix" width={40} />
            <Typography color={"red"} fontSize={28}>
              RE-FLIX + HAHAHA
            </Typography>
          </Stack>
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            Home
          </StyledLink>
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            About
          </StyledLink>
        </Stack>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search..." }}
          />
          <IconButton type="button" sx={{ p: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Header;
