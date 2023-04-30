import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (b: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodo }) => {
  const todos = items.map((item, idx) => (
    <motion.li
      key={item.id}
      initial={{ opacity: 0, transform: "translateX(5%" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: "0" }}
      className="bg-slate-800 hover:bg-slate-600 px-4 py-3 rounded-lg m-4 max-w-[12rem] flex  items-center justify-between"
    >
      <Link to={`/task/${item.id}`} className="w-[75%] ">
        <article className="flex">
          <span className="mr-3 px-2 py-1 border self-start border-gray-700 bg-slate-800">{idx}</span>{" "}
          <p className="w-full  break-words line-clamp-2">{item.text}</p>{" "}
        </article>
      </Link>

      <button
        className="bg-slate-600  p-2 text-white rounded-lg hover:bg-red-300 hover:scale-125 transition-all duration-300 group"
        onClick={deleteTodo.bind(null, item.id)}
      >
        <FaTrash className="group-hover:text-red-500 transition-all duration-300" />
      </button>
    </motion.li>
  ));
  return (
    <AnimatePresence>
      <ul className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 max-h-[40rem] overflow-y-scroll p-2  bg-[rgba(255,255,255,.05)] border border-gray-600 rounded-2xl shadow-2xl mx-4">
        {items.length > 0 ? (
          todos
        ) : (
          <p className="text-center text-white tracking-wider capitalize text-lg">
            List is empty{" "}
          </p>
        )}
      </ul>
    </AnimatePresence>
  );
};

export default TodoList;
