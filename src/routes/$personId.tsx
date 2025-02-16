import {
  Card,
  CardContent,
  Typography,
  Container,
  CircularProgress,
  Button,
} from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
import usePerson from "../data/use-person";

export const Route = createFileRoute("/$personId")({
  component: PersonDetails,
});

export default function PersonDetails() {
  const { personId } = Route.useParams();
  const { person, isLoading, isError } = usePerson(personId);

  if (isLoading) {
    return <CircularProgress color="info" />;
  }

  if (isError || !person) {
    return (
      <Typography color="error">Error loading character's data</Typography>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {person.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Height:</strong> {person.height} cm
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Mass:</strong> {person.mass} kg
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Hair Color:</strong> {person.hair_color}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Skin Color:</strong> {person.skin_color}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Eye Color:</strong> {person.eye_color}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Birth Year:</strong> {person.birth_year}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Gender:</strong> {person.gender}
          </Typography>

          <Link to="/">
            <Button variant="contained" sx={{ mt: 2 }}>
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
