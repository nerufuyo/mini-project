import { Typography, Grid, Box } from "@mui/material";

const CategoryTitle = ({ title }) => {
  return (
    <Grid container direction="row" gap={1} alignItems="center">
      <Box sx={{ width: 4, height: 20, backgroundColor: "red" }}></Box>
      <Typography variant="h6" color={"white"}>
        {title}
      </Typography>
    </Grid>
  );
};

export default CategoryTitle;
