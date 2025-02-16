import { ChangeEvent, useEffect, useState } from "react";
import { TextField } from "@mui/material";

type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const [value, setValue] = useState(search);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [value, setSearch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextField
      fullWidth
      autoFocus
      label="Search characters"
      variant="outlined"
      value={value}
      onChange={handleChange}
      sx={{ mb: 4 }}
    />
  );
};

export default Search;
