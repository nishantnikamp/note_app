import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    noteContent: "",
    notes: [],
    archive: [],
  };
  const [{ title, noteContent, notes, archive }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider
      value={{ title, noteContent, notes, archive, notesDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
