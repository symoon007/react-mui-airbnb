import { Box, Button, Link, Stack } from "@mui/material";
import React from "react";
import { flexCenter } from "themes/commonStyles";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become A Host</Link>
      <Stack direction="row">
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button direction='row' sx={{ borderRadius: 10, border: "1px solid #ddd" }}>
          <Stack direction='row'>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
