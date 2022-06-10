import { Box, Divider, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  }

  return (
    <>
      <Box width="250px" mt={4}>
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          color="secondary"
          helperText="Please select your country"
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="BR">Brasil</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <Divider sx={{ mt: 2, mb: 2 }} />
    </>
  );
};
