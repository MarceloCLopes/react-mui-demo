import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <>
      <Box width={"300px"}>
        <Card
        // style={{
        //   background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        // }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="unsplash image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vel facilis vero, quasi rerum in praesentium illo! Ut provident,
              consectetur omnis ex iure eaque alias obcaecati, corrupti suscipit
              atque non?
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Divider sx={{ mt: 2, mb: 2 }} />
    </>
  );
};
