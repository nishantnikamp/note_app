import { Navbar } from "../../components/Navbar";
import { Fragment } from "react";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/note-context";

export const Home = () => {
  const { title, noteContent, notes, archive, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onNoteContentChange = (e) => {
    notesDispatch({
      type: "NOTE_CONTENT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-5">
        <Sidebar />
        <div className="flex flex-col p-5 w-screen mt-7">
          <div className="flex flex-col w-[450px] self-center border-yellow-800 relative hover:shadow-2xl ...transition-shadow">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
              placeholder="Enter Title"
            />
            <textarea
              value={noteContent}
              onChange={onNoteContentChange}
              className="h-[120px] border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1"
              placeholder="Enter Note"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-2 right-2 bg-yellow-500 text-slate-50 px-3 py-1 rounded-full hover:bg-yellow-400 flex align-center gap-1"
            >
              <span class="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-5 mt-14 ml-10 ">
            {pinnedNotes?.length > 0 && (
              <div>
                <h3>Pinned Notes</h3>
                <div className="flex flex-wrap gap-10">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ id, title, noteContent, isPinned }) => (
                      <NotesCard
                        key={id}
                        id={id}
                        title={title}
                        noteContent={noteContent}
                        isPinned={isPinned}
                      />
                    ))}
                </div>
              </div>
            )}
            <div className="">
              {pinnedNotes?.length > 0 && <h3>Other Notes</h3>}
              <div className="flex flex-wrap gap-10">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ id, title, noteContent, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      noteContent={noteContent}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
