import logo from "../../assets/notelogo.png";
export const Navbar = () => {
  return (
    <header className="flex px-5 py-2 gap-3 border-b-2 border-yellow-300">
      <div className="w-12 h-12">
        <img className="w-full h-full" src={logo} alt="Note App Logo" />
      </div>
      <h1 className="text-4xl font-bold text-yellow-500">Note App</h1>
    </header>
  );
};
