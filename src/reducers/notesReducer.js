import { v4 as uuid } from "uuid";

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "NOTE_CONTENT":
      return {
        ...state,
        noteContent: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            noteContent: state.noteContent,
            title: state.title,
            id: uuid(),
            isPinned: false,
          },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        noteContent: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
