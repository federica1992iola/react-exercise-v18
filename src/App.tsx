import { TodoList } from "./components/TodoList";

export const App = () => {
  const name: string = "Hello from React v18";

  const onChildClicked = (e: number) => {
    console.warn("callback from parent triggered", e);
  };

  return (
    <div className="p-2">
      <TodoList />
    </div>
  );
};
