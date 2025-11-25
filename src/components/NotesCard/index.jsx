import { useNotes } from "../../context/note-context";

export const NotesCard = ({ id, title, noteContent, isPinned }) => {
  const { notesDispatch } = useNotes();

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    notesDispatch({
      type: "ARCHIVE",
      payload: { id },
    });
  };

  return (
    <div
      className="w-80 border border-yellow-950 p-2 rounded hover:shadow-2xl ...transition-shadow"
      key={id}
    >
      <div className="flex justify-between">
        <p>{title}</p>
        <button onClick={() => onPinClick(id)}>
          <span
            className={isPinned ? "material-icons" : "material-icons-outlined"}
          >
            push_pin
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <p>{noteContent}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            <span className="material-icons-outlined">archive</span>
          </button>
          <button>
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
