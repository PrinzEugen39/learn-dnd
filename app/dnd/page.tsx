"use client";
import { COLUMS, INITIAL_TASK } from "@/const";
import type { KanbanColumn as ColumnType, Task } from "@/types/index";
import {
  DndContext,
  DragCancelEvent,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Column from "../_component/Column";

const DnD = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(INITIAL_TASK));
    }
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, []);

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 30 pixels before activating
    activationConstraint: {
      distance: 30,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over) return;

    console.log("active 15", active);
    console.log("over 16", over);

    const draggedId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks(() => {
      const updatedTasks = tasks.map((task) => {
        if (task.category_id === draggedId) {
          const updatedTask = { ...task, status: newStatus };
          return updatedTask;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });
  }

  function handleDragCancel(e: DragCancelEvent) {
    console.log("drag cancel", e);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleDragStart(e: DragStartEvent) {
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      onDragStart={handleDragStart}
      sensors={sensors}
    >
      <div className="p-4">
        <div className="flex gap-8 justify-center mt-32">
          {COLUMS.map((column: ColumnType) => {
            return (
              <Column
                key={column.id}
                tasks={tasks.filter((item) => item.status === column.id)}
                column={column}
              />
            );
          })}
        </div>
      </div>
    </DndContext>
  );
};

export default DnD;
