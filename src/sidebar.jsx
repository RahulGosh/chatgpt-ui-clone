import {
  FiPlus,
  FiSearch,
  FiEdit,
  FiChevronDown,
  FiBook,
  FiGrid,
  FiMenu,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const todayHistory = [{ id: 1, title: "Dark Light Mode Toggle" }];

  const yesterdayHistory = [{ id: 2, title: "Black book project summary" }];

  const previousSevenDays = [
    { id: 3, title: "Event Details Examples" },
    { id: 4, title: "Lecture course field missing" },
    { id: 5, title: "Next.js Course Description" },
    { id: 6, title: "React Login and Product API" },
  ];

  const previousThirtyDays = [
    { id: 7, title: "Fixing TypeScript Undefined E" },
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:block fixed md:static z-40 w-64 h-screen overflow-y-auto bg-light-sidebar dark:bg-dark-sidebar border-r border-gray-200 dark:border-gray-700 flex flex-col`}
    >
      {" "}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
        <button
          className="mr-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300  items-center justify-center transition-colors"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        <div className="flex items-center">
          <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
            <FiSearch size={20} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
            <FiEdit size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 px-2 py-2 overflow-y-auto">
        <div className="mb-4">
          <h3 className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            Today
          </h3>
          <div className="space-y-1">
            {todayHistory.map((item) => (
              <Link
                key={item.id}
                to={`/chat/${item.id}`}
                className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <span className="truncate">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            Yesterday
          </h3>
          <div className="space-y-1">
            {yesterdayHistory.map((item) => (
              <Link
                key={item.id}
                to={`/chat/${item.id}`}
                className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <span className="truncate">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            Previous 7 Days
          </h3>
          <div className="space-y-1">
            {previousSevenDays.map((item) => (
              <Link
                key={item.id}
                to={`/chat/${item.id}`}
                className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <span className="truncate">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            Previous 30 Days
          </h3>
          <div className="space-y-1">
            {previousThirtyDays.map((item) => (
              <Link
                key={item.id}
                to={`/chat/${item.id}`}
                className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <span className="truncate">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;