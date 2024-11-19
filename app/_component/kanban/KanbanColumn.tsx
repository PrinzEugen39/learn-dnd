"use client";

import { TCards } from "@/store/KanbanContext";
import { useState } from "react";
import KanbanCard from "./KanbanCard";
import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";
import { DragStartEvent } from "@dnd-kit/core";

interface IKanbanColumnProps {
  title: string;
  headingColor: string;
  column: string;
  cards?: TCards[];
  dispatch?: unknown;
}

export default function KanbanColumn({
  title,
  headingColor,
  column,
  cards,
  dispatch,
}: IKanbanColumnProps) {
  const [active, setActive] = useState(false);

  const filteredCards = cards?.filter((card) => card.column === column);

  function handleDragStart(e: DragStartEvent, card: TCards) {
    e.dataTransfer.setData("cardId", card.id);
  }

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{filteredCards?.length}</span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/70" : "bg-neutral-800/10"
        }`}
      >
        {filteredCards?.map((card) => (
          <KanbanCard
            key={card.id}
            column={card.column}
            id={card.id}
            title={card.title}
            handleDragStart={handleDragStart}
          />
        ))}
        <DropIndicator column={column} />
        <AddCard column={column} />
      </div>
    </div>
  );
}
