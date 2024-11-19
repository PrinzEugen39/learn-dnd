import { KanbanProvider } from "@/store/KanbanContext";
import Board from "../_component/kanban/Board";

export default function Kanban() {
  return (
    <KanbanProvider>
      <section className="h-screen w-full bg-neutral-900 text-neutral-50"><Board /></section>
    </KanbanProvider>
  );
}
