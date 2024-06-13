import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

const ExercisesTag = ({ data, bodyParts, setBodyPart, bodyPart }) => (
//   /<Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" overflow="hidden">
//   <Item>Item 1</Item>
//   <Item>Item 2</Item>
//   <Item>Long content</Item>
// </Stack>/
  <Stack  spacing={{ xs: 1.5, lg: 5 }} sx={{ml:{xs:'10px'}}} direction={"row"} useFlexGap flexWrap="wrap">
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </Stack>
);

export default ExercisesTag;
