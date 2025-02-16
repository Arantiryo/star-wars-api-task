import useSWR from "swr";
import { BASE_URL, fetcher } from "../utils/utils";
import type { Person } from "../utils/types";

const usePerson = (personId: string) => {
  const { data, error, isLoading } = useSWR<Person>(
    `${BASE_URL}/people/${personId}/`,
    fetcher
  );

  return {
    person: data,
    isLoading,
    isError: error,
  };
};

export default usePerson;
