import { Typography, Box, Stack } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ px: 52 }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Stack>
          <Typography>Test</Typography>
        </Stack>
        <Typography>Test</Typography>
      </Stack>
    </Box>
  );
};

export default Header;
