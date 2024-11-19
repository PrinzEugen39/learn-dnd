"use client";
import { useKanbanState } from "@/store/KanbanContext";
import KanbanColumn from "./KanbanColumn";
import DropdownDelete from "./DropdownDelete";

export default function Board() {
  const { state, dispatch } = useKanbanState();
  return (
    <div className="flex h-full w-full gap-4 p-12 justify-center">
      <KanbanColumn
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={state.cards}
        dispatch={dispatch}
      />
      <KanbanColumn
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={state.cards}
        dispatch={dispatch}
      />
      <KanbanColumn
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={state.cards}
        dispatch={dispatch}
      />
      <KanbanColumn
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={state.cards}
        dispatch={dispatch}
      />
      <DropdownDelete />
    </div>
  );
}
