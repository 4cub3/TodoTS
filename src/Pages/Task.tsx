import React from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "../Shared/Modal";
interface TaskProps {
  item: { id: string; text: string }[];
}
const Task: React.FC<TaskProps> = ({ item }) => {
  const params: { taskId: string } = useParams();
  const task = item.filter((itm) => itm.id === params.taskId);

  return (
    <Modal>
      <div className="flex-col max-w-3xl max-h-[30rem] overflow-y-scroll shadow-2xl space-y-4 bg-slate-600 text-white rounded-lg p-4 flex items-center justify-center mx-4">
        <p> {task[0].text}</p>
        <Link to="/task" className="px-4 py-2 bg-slate-500 rounded-xl">
          close
        </Link>
      </div>
    </Modal>
  );
};

export default Task;
