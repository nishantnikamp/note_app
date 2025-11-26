import { useNotes } from "../../context/note-context";
import { findNotesInArchive } from "../../utils/findNotsInArchive";
export const NotesCard = ({ id, title, noteContent, isPinned }) => {
  const { notesDispatch, archive } = useNotes();

  const isNotesInArchive = findNotesInArchive(archive, id);
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
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
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
        {!isNotesInArchive ? (
          <button onClick={() => onPinClick(id)}>
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col">
        <p>{noteContent}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            <span
              className={
                isNotesInArchive ? "material-icons" : "material-icons-outlined"
              }
            >
              archive
            </span>
          </button>
          <button>
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
