import {
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import usePeople from "../data/use-people";
import Pagination from "./pagination";
import { BASE_URL } from "../utils/utils";
import { useState } from "react";
import Search from "./search";
import { Person } from "../utils/types";
import { Link } from "@tanstack/react-router";

const PeopleList = () => {
  const [search, setSearch] = useState("");
  const [defaultUrl, setDefaultUrl] = useState(`${BASE_URL}/people/?page=1`);

  const urlWithSearch = search
    ? `${BASE_URL}/people/?page=1&search=${search}`
    : defaultUrl;

  const { people, isLoading, isError, previous, next } =
    usePeople(urlWithSearch);

  if (isError) {
    return <Typography color="error">Error loading people data</Typography>;
  }

  return (
    <Stack width="100%">
      <Search search={search} setSearch={setSearch} />
      {isLoading ? (
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="info" />
        </Stack>
      ) : (
        <PeopleCards people={people} />
      )}

      <Pagination
        previous={previous}
        next={next}
        setDefaultUrl={setDefaultUrl}
      />
    </Stack>
  );
};

const PeopleCards = ({ people }: { people?: Person[] }) => {
  if (people?.length === 0) return <Typography>No characters found</Typography>;

  return (
    <Grid container spacing={3}>
      {people?.map((person) => {
        const personId = person.url.split("/").filter(Boolean).pop() || "1";

        return (
          <Grid size={3} key={person.url}>
            <Link to={`/$personId`} params={{ personId }}>
              <Card sx={{ borderRadius: 4, cursor: "pointer" }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {person.name}
                  </Typography>
                  <br />
                  <Typography color="textSecondary">
                    Birth Year: {person.birth_year}
                  </Typography>
                  <Typography>Height: {person.height}cm</Typography>
                  <Typography>Mass: {person.mass}kg</Typography>
                  <Typography>Gender: {person.gender}</Typography>
                  <Typography>Eye Color: {person.eye_color}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PeopleList;
