import {
  Card,
  CardContent,
  Typography,
  Container,
  CircularProgress,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
import usePerson from "../data/use-person";
import { Field, Formik } from "formik";
import { Person } from "../utils/types";
import usePersonStore from "../store/person-store";
import { useNotifications } from "@toolpad/core/useNotifications";

export const Route = createFileRoute("/$personId")({
  component: PersonDetails,
});

export default function PersonDetails() {
  const { personId } = Route.useParams();
  const { person, isLoading, isError } = usePerson(personId);

  if (isError) {
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        position: "relative",
      }}
    >
      {isLoading ? (
        <CircularProgress color="info" />
      ) : (
        <>
          <PersonCard person={person} personId={personId} />
          <Link to="/">
            <Button variant="contained" color="info">
              Home
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
}

type PersonCardProps = {
  person: Person | undefined;
  personId: string;
};

const PersonCard = ({ person, personId }: PersonCardProps) => {
  const savePerson = usePersonStore((state) => state.savePerson);
  const notifications = useNotifications();

  if (!person) return null;

  return (
    <>
      <Card sx={{ width: "100%", maxWidth: 600 }}>
        <CardContent>
          <Formik
            initialValues={{
              name: person.name,
              height: person.height,
              mass: person.mass,
              hair_color: person.hair_color,
              skin_color: person.skin_color,
              eye_color: person.eye_color,
              birth_year: person.birth_year,
              gender: person.gender,
            }}
            onSubmit={(values) => {
              savePerson(
                {
                  ...person,
                  ...values,
                },
                personId
              );

              notifications.show("Character saved successfully!", {
                severity: "success",
                autoHideDuration: 3000,
              });
            }}
          >
            {({ handleSubmit, resetForm, dirty }) => (
              <form onSubmit={handleSubmit}>
                <Typography variant="h4" component="h1" gutterBottom>
                  <Field
                    autoFocus
                    name="name"
                    as={TextField}
                    fullWidth
                    variant="standard"
                  />
                </Typography>

                <Stack spacing={2}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Field
                      name="height"
                      as={TextField}
                      label="Height (cm)"
                      fullWidth
                    />
                    <Field
                      name="mass"
                      as={TextField}
                      label="Mass (kg)"
                      fullWidth
                    />
                    <Field
                      name="birth_year"
                      as={TextField}
                      label="Birth Year"
                      fullWidth
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Field
                      name="hair_color"
                      as={TextField}
                      label="Hair Color"
                      fullWidth
                    />
                    <Field
                      name="skin_color"
                      as={TextField}
                      label="Skin Color"
                      fullWidth
                    />
                    <Field
                      name="eye_color"
                      as={TextField}
                      label="Eye Color"
                      fullWidth
                    />
                  </Stack>

                  <Field
                    name="gender"
                    as={TextField}
                    label="Gender"
                    fullWidth
                  />

                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color="error"
                      disabled={!dirty}
                      onClick={() => {
                        resetForm();
                        notifications.show("Changes discarded!", {
                          severity: "warning",
                          autoHideDuration: 3000,
                        });
                      }}
                    >
                      Discard Changes
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!dirty}
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};
