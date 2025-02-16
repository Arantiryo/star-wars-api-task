import { Container, Typography } from "@mui/material";
import PeopleList from "../components/people-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100%",
        py: 2,
        minWidth: "calc(90vw - 48px)",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "2rem", sm: "3.75rem" },
        }}
        gutterBottom
      >
        Star Wars Characters
      </Typography>
      <PeopleList />
    </Container>
  );
}
