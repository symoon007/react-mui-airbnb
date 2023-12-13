import { Box, Typography } from "@mui/material";
import { FaAirbnb } from "react-icons/fa";
import React from "react";

import { pink } from "@mui/material/colors";
import { flexCenter } from "themes/commonStyles";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography sx={{
        ml: 1,
        color: theme => theme.palette.secondary.main,
        fontSize: '20px',
        fontWeight: 'bold'
      }}
      component='h3'
      >
        airBnB
      </Typography>
    </Box>
  );
};

export default Logo;
