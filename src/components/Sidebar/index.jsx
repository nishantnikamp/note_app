import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyle = ({ isActive }) => {
    const styles =
      "flex align-center gap-1 px-2 py-2 rounded-full rounded-br-full";
    return isActive
      ? `text-slate-50 bg-yellow-500 ${styles}`
      : `hover:bg-yellow-500 hover:text-slate-50 ${styles}`;
  };

  return (
    <aside className="flex flex-col gap-4 border-r-2 border-yellow-300 w-[200px] h-screen p-2">
      <NavLink className={getStyle} to="/">
        <span class="material-icons-outlined">home</span>
        <span> Home</span>
      </NavLink>
      <NavLink className={getStyle} to="/archive">
        <span class="material-icons-outlined">archive</span>
        <span> Archive</span>
      </NavLink>
      <NavLink className={getStyle} to="/important">
        <span class="material-icons-outlined">bookmarks</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyle} to="/bin">
        <span class="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
