import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import usePeople from "../data/use-people";
import Pagination from "./pagination";
import { BASE_URL } from "../utils/utils";
import { useState } from "react";

const PeopleList = () => {
  const [defaultUrl, setDefaultUrl] = useState(`${BASE_URL}/people/?page=1`);
  const { people, isLoading, isError, previous, next } = usePeople(defaultUrl);

  if (isLoading) {
    return <CircularProgress color="info" />;
  }

  if (isError) {
    return <Typography color="error">Error loading people data</Typography>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {people?.map((person) => (
          <Grid size={3} key={person.url}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {person.name}
                </Typography>
                <Typography color="textSecondary">
                  Birth Year: {person.birth_year}
                </Typography>
                <Typography>Height: {person.height}cm</Typography>
                <Typography>Mass: {person.mass}kg</Typography>
                <Typography>Gender: {person.gender}</Typography>
                <Typography>Eye Color: {person.eye_color}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        previous={previous}
        next={next}
        setDefaultUrl={setDefaultUrl}
      />
    </>
  );
};

export default PeopleList;
