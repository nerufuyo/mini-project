import { Box, Stack, Divider, Typography, Link, styled } from "@mui/material";

const StyledLink = styled(Link)({
  "&:hover": {
    color: "red",
  },
});

const Footer = () => {
  return (
    <Box sx={{ px: 52, py: 2 }}>
      <Stack direction="column" gap={2} alignItems="center">
        <Stack direction="row" alignItems="center">
          <Divider
            variant="middle"
            sx={{ backgroundColor: "white", my: 4, opacity: "25%" }}
          />
          <Typography variant="body2" color={"white"}>
            Copyright © 2023 by IDLIX. All Rights Reserved.
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
            Help
          </StyledLink>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "white", opacity: "25%" }}
          />
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            DMCA
          </StyledLink>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "white", opacity: "25%" }}
          />
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            Privacy
          </StyledLink>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "white", opacity: "25%" }}
          />
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            Discord
          </StyledLink>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "white", opacity: "25%" }}
          />
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            Telegram
          </StyledLink>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "white", opacity: "25%" }}
          />
          <StyledLink
            href="#"
            underline="none"
            color={"white"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
          >
            Instagram
          </StyledLink>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
