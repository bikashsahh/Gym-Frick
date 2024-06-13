import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '1px solid #FF2625',borderBottom : '1px solid #FF2625',cursor: 'pointer', gap: '0px' } :""}
    onClick={() => {

      const screenWidth = window.innerWidth;
      const scrollTop = screenWidth >= 1200 ? 1350 : 870; // Example breakpoint for lg (1200px)

      setBodyPart(item);
      // window.scrollTo({ sx: {top: { lg :1350 , xs : 1100}}, left: 100, behavior: "smooth" });
      window.scrollTo({ top: scrollTop, left: 100, behavior: "smooth" });
    }}
  >
    {/* <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} /> */}
    <Typography
      sx={{fontSize : {lg : '19px' , xs :'15px'}}}
      // fontSize="20px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
