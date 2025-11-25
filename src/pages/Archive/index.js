import { Fragment } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import { useNotes } from "../../context/note-context";
import { NotesCard } from "../../components/NotesCard";

export const Archive = () => {
  const { archive } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <main className="flex flex-col gap-0">
        <Sidebar />
        <div>
          <div className="flex flex-wrap gap-10 w-screen mt-7">
            {archive?.length > 0 &&
              archive.map(({ id, title, noteContent, isPinned }) => (
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
      </main>
    </Fragment>
  );
};
