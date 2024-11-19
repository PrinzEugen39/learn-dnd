"use client";

import { KanbanColumn, Task } from "@/types";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

type ColumnProps = {
  column: KanbanColumn;
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  // console.log(column.id, tasks);

  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      {" "}
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        <SortableContext items={tasks.map((item) => item.category_id)}>
          {tasks.map((item) => (
            <TaskCard key={item.category_id} task={item} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default Column;
