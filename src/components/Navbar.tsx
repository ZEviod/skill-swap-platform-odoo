import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ onLoginClick, mode, setMode }: { onLoginClick: () => void; mode: string; setMode: (mode: string) => void }) {
  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <nav className={`px-6 py-4 flex justify-between items-center ${mode === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
      <h1 className={`text-xl font-bold ${mode === "dark" ? "text-white" : "text-gray-900"}`}>Skill Swap Platform</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={handleToggle}
          className={`p-2 rounded-full border-2 ${mode === "dark" ? "border-white text-yellow-300" : "border-gray-800 text-gray-800"}`}
          aria-label="Toggle dark/light mode"
        >
          {mode === "dark" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
        <button
          onClick={onLoginClick}
          className={`px-4 py-2 rounded ${mode === "dark" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-400 hover:bg-blue-500 text-gray-900"}`}
        >
          Login
        </button>
      </div>
    </nav>
  );
}