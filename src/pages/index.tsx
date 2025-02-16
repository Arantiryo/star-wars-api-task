import { Container, Typography } from "@mui/material";
import PeopleList from "../components/people-list";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh", py: 2 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Star Wars Characters
      </Typography>
      <PeopleList />
    </Container>
  );
}
