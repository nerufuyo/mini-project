import { Typography, Box, Stack, Link, styled } from "@mui/material";
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
        <Stack direction="row" gap={2} alignItems="center">
          <img src={Logo} alt="Re-Flix" width={40} />
          <Typography color={"white"} fontSize={28}>
            RE-FLIX
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
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
            Movies
          </StyledLink>
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            Television
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
      </Stack>
    </Box>
  );
};

export default Header;
