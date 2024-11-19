import { TCards } from "@/store/KanbanContext";
import DropIndicator from "./DropIndicator";

interface IKanbanCardProps {
  title: string;
  id: string;
  column: string;
  handleDragStart?: (e: any, card: TCards) => void;
}

export default function KanbanCard({ title, id, column, handleDragStart }: IKanbanCardProps) {
  return (
    <>
    <DropIndicator beforeId={id} column={column} />
      <div draggable className="cursor-grab active:cursor-grabbing rounded border border-neutral-700 bg-neutral-800 p-3 min-h-24 my-0.5 last:mb-0">
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
}
