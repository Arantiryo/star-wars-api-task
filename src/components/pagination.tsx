import { Button, Stack } from "@mui/material";

type PaginationProps = {
  previous?: string | null;
  next?: string | null;
  setDefaultUrl: (url: string) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  previous,
  next,
  setDefaultUrl,
}) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
      <Button
        variant="contained"
        disabled={!previous}
        onClick={() => previous && setDefaultUrl(previous)}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        disabled={!next}
        onClick={() => next && setDefaultUrl(next)}
      >
        Next
      </Button>
    </Stack>
  );
};

export default Pagination;
