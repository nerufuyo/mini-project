import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = ({ title, date, image }) => {
  return (
    <Card style={{ height: 300, width: 150 }}>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
