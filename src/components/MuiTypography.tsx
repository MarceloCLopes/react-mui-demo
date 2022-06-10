import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <br />
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <br />
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ut
        nam molestias debitis laborum earum quod quas, porro neque facilis
        dolorum quidem libero sint voluptates tempore quo! Quae, earum voluptas.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        mollitia fuga molestiae illum nisi officiis facere natus debitis,
        reiciendis dolores sunt, dolor dolorum. Provident labore distinctio,
        odio repellendus reiciendis harum?
      </Typography>
    </div>
  );
};
