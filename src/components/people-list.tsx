import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import usePeople from "../data/use-people";

const PeopleList = () => {
  const { people, isLoading, isError } = usePeople();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error">Error loading people data</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {people?.map((person) => (
        <Grid size={3} key={person.url}>
          <Card>
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
  );
};

export default PeopleList;
