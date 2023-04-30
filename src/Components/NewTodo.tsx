import React, { useRef, useState } from "react";
interface NewTodoProps {
  newTodo: (a: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ newTodo }) => {
  const enteredInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(true);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredValue = enteredInput.current!.value;
    if (enteredValue === "" || enteredValue.trim().length < 5) {
      alert("Must have atleast 5 characters");
      
    } else newTodo(enteredValue);
  };

  const changeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value.trim().length < 5) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className=" mb-5 mx-4">
      <label htmlFor="todo-text" className="text-white">
        Todo text
      </label>
      <input
        type="text"
        id="todo-text"
        ref={enteredInput}
        className={`block p-4 my-3 rounded-lg w-full outline-none transition-all duration-200  ${
          error
            ? "focus:bg-red-100 bg-slate-700 focus:text-red-900 focus:placeholder:text-red-900 "
            : "bg-slate-700 text-white placeholder:text-slate-400 "
        }`}
        placeholder="Your task here"
        minLength={5}
        onChange={changeHandler}
      />

      <button
        type="submit"
        className=" bg-slate-900 px-4 py-2 my-4 rounded-md text-white block"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
