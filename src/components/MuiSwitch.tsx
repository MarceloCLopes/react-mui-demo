import { useState } from "react";
import { Box, Divider, FormControlLabel, Switch } from "@mui/material";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
      <Divider sx={{ mt: 2, mb: 2 }} />
    </Box>
  );
};
