import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = ({ title, date, image }) => {
  return (
    <Card style={{ height: 280, width: 140 }}>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h7"
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
          variant="body3"
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
