import useSWR from "swr";
import { BASE_URL, fetcher } from "../utils/utils";
import type { Person } from "../utils/types";
import usePersonStore from "../store/person-store";

const usePerson = (personId: string) => {
  const { data, error, isLoading, mutate } = useSWR<Person>(
    `${BASE_URL}/people/${personId}/`,
    fetcher
  );

  const savedPerson = usePersonStore((state) => state.getPersonById(personId));

  if (savedPerson) {
    return {
      person: savedPerson,
      isLoading: false,
      isError: false,
      mutate,
    };
  }

  return {
    person: data,
    isLoading,
    isError: error,
    mutate,
  };
};

export default usePerson;
