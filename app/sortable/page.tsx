"use client";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { SortableItem } from "../_component/ScrollableItem";
import { SortableItemMock } from "../_component/SortableItemMock";

export default function Sortable() {
  const [items, setItems] = useState(["1", "2", "3", "4", "5"]);
  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    setActiveId(active.id as string);
  }

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <div className="p-4">
      <div className="flex gap-8 justify-center mt-32">
        <h2 className="mb-4 font-semibold text-neutral-100">SORTABLE</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-4 bg-neutral-800 p-4 rounded-lg">
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </div>
          </SortableContext>
          <DragOverlay>{activeId ? <SortableItemMock id={activeId} /> : null}</DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
