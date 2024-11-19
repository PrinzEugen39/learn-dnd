import { KanbanColumn, Task } from "./types";

export const INITIAL_TASK: Task[] = [
  {
    category_name: "Cerita Masa Lalu",
    category_id: "1",
    description: "Once upon a time, there was a task.",
    status: "TODO",
  },
  {
    category_name: "Apakah Mau Kelar?",
    category_id: "2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
    status: "IN_PROGRESS",
  },
  {
    category_name: "Ini Apa Sih",
    category_id: "3",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    status: "TODO",
  },
  {
    category_name: "Integrasi API",
    category_id: "4",
    description: "Implement REST API.",
    status: "TODO",
  },
  {
    category_name: "Integrasi Air",
    category_id: "5",
    description: "Mata air sudah dekat.",
    status: "DONE",
  },
];

export const COLUMS: KanbanColumn[] = [
  {
    id: "TODO",
    title: "To Do",
  },
  {
    id: "IN_PROGRESS",
    title: "In Progress",
  },
  {
    id: "DONE",
    title: "Done",
  },
]

export const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];