import { useKanbanState } from "@/store/KanbanContext";
import { FormEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function AddCard({ column }: { column: string }) {
  const { dispatch } = useKanbanState();
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  function reset() {
    setText("");
    setAdding(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    dispatch({ type: "ADD_CARD", payload: newCard });
    reset();
  }

  return (
    <>
      {!adding ? (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <FiPlus />
          <span>Tambah</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tambah task baru"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-none"
          />
          <div className="flex justify-end gap-1.5">
            <button
              onClick={reset}
              type="button"
              className="w-fit bg-neutral-500/20 text-neutral-50 p-2 rounded"
            >
              Batal
            </button>
            <button type="submit" className="w-fit bg-violet-400/50 text-neutral-50 p-2 rounded">
              Tambah
            </button>
          </div>
        </form>
      )}
    </>
  );
}
