import { Typography, Box, Stack } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ px: 40 }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography>Test</Typography>
        <Typography>Test</Typography>
      </Stack>
    </Box>
  );
};

export default Header;
