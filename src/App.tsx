import "./app.css";
import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import NewTodo from "./Components/NewTodo";
import StoreLS from "./store/Localstorage/StoreLS";
import Task from "./Pages/Task";
import {Route, Redirect, Switch} from 'react-router-dom';

interface Todo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const storageLS = StoreLS();
  let todoItem: [];
  if (localStorage.getItem("Store")) {
    todoItem = JSON.parse(localStorage.getItem("Store")!);
  } else {
    todoItem = [];
  }
  const [generatedTodo, setGeneratedTodo] = useState<Todo[]>(todoItem);

  const addTodo = (newTodo: string) => {
    let id = Math.random().toString();
    storageLS({ id, text: newTodo });
    setGeneratedTodo((prev) => [...prev, { id, text: newTodo }]);
  };

  const deleteHandler = (todoId: string) => [
    setGeneratedTodo((prev) => {
      localStorage.setItem(
        "Store",
        JSON.stringify(prev.filter((itm) => itm.id !== todoId))
      );
      return prev!.filter((itm) => itm.id !== todoId);
    }),
  ];
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect  to='/task' />
      </Route>
    <Route path='/task'>
      {" "}
      <div className="bg-slate-950 w-screen h-screen overflow-y-scroll">
        <main className="max-w-[1200px] mx-auto py-10">
          <NewTodo newTodo={addTodo} />
          <TodoList items={generatedTodo} deleteTodo={deleteHandler} />
        </main>
      </div>
      <Route path='/task/:taskId' exact>
        <Task item={generatedTodo}/>
      </Route>
      </Route>
      <Route path='*'>
      <div className="bg-slate-950 w-screen h-screen overflow-hidden flex items-center justify-center text-white">
        <p className="text-xl">Page Not found</p>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
