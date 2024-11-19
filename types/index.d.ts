export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  category_id: string
  category_name: string
  status: TaskStatus
  description: string
}

export type KanbanColumn = {
  id: TaskStatus
  title: string
}