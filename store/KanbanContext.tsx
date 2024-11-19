"use client";
import { DEFAULT_CARDS } from "@/const";
import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

export type TCards = { title: string; id: string; column: string };

interface IState {
  cards: TCards[];
}

interface IAction {
  type: string;
  payload: unknown;
}

const initialState: IState = {
  cards: DEFAULT_CARDS,
};

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.payload as TCards] };
    default:
      throw new Error("Unknown action type");
  }
}

const KanbanContext = createContext<{ state: IState; dispatch: Dispatch<IAction> }>({
  state: initialState,
  dispatch: () => null,
});

function KanbanProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <KanbanContext.Provider value={{ state, dispatch }}>{children}</KanbanContext.Provider>;
}

function useKanbanState() {
  const context = useContext(KanbanContext);

  if (context === undefined) {
    throw new Error("useKanbanState must be used within a KanbanProvider");
  }

  const { state, dispatch } = context;

  return { state, dispatch };
}

export { KanbanProvider, useKanbanState };

