import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExercisesTag from "./ExercisesTag";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);

      window.scrollTo({ top: 1380, left: 100, behavior: "smooth" });
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" sx={{mt: {lg : "300px" , xs : "20px"}}}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "54px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Incredible Workouts You Can't Miss
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          variant="filled"
          fullWidth
          label="Search Exercises"
          sx={{
            color: "error",
            fontFamily: "Arial",
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          color="error"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FE2525",
            textTransform: "none",
            width: { lg: "160px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            "&:hover": {
              backgroundColor: "#D92020",
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "absolute" ,p: {lg : "40px" , xs:'0px'},mt:{lg:'300px' , xs:'320px'} ,mb:{xs:'100px'} }}>
        <ExercisesTag
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
