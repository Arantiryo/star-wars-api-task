import { create } from "zustand";
import { Person } from "../utils/types";

interface PersonState {
  savedPeople: Record<string, Person>;
  savePerson: (person: Person, id: string) => void;
  getPersonById: (id: string) => Person | undefined;
}

const usePersonStore = create<PersonState>((set, get) => ({
  savedPeople: {},
  savePerson: (person, id) =>
    set((state) => ({
      savedPeople: {
        ...state.savedPeople,
        [id]: person,
      },
    })),
  getPersonById: (id: string) => get().savedPeople[id],
}));

export default usePersonStore;
