import { Task } from "@/types";
import { useDraggable } from "@dnd-kit/core";

interface ITaskCard {
  task: Task;
}

export default function TaskCard({ task }: ITaskCard) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: task.category_id,
    data: task as unknown as Task,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="rounded-lg bg-neutral-700 p-4 shadow hover:shadow-md cursor-grab flex gap-2"
    >
      <div className="flex flex-col justify-center">
        <span>-</span>
      </div>
      <div>
        <h3 className="font-medium text-neutral-100">{task.category_name}</h3>
        <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
      </div>
    </div>
  );
}
