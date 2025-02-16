import { Container, Typography } from "@mui/material";
import PeopleList from "../components/people-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh", py: 2 }}>
      <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
        Star Wars Characters
      </Typography>
      <PeopleList />
    </Container>
  );
}
