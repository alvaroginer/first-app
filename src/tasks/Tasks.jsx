import { useState } from "react";

export const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  console.log(allTasks);

  const handleClick = () => {
    setAllTasks([...allTasks, `tarea ${allTasks.length + 1}`]);
  };

  return (
    <div>
      <button onClick={handleClick}>Añadir tarea</button>
      <p>Tarea añadida {allTasks.length}</p>
      {allTasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
};
