import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItemMock } from "./SortableItemMock";

interface ISortableItem {
  id: string;
}

export function SortableItem(props: ISortableItem) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <SortableItemMock ref={setNodeRef} style={style} {...attributes} {...listeners} id={props.id} />
  );
}
