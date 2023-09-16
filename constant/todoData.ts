export type todos = {
  id: number
  type:
    | "Important"
    | "Instructor Meeting"
    | "Database"
    | "Video"
    | "BUGS FIXINGS"
  content: string
  progress: number
  members: number
}

type todoList = {
  title: string
  todos: todos[]
}

export const todoData: todoList[] = [
  {
    title: "To-Do List(24)",
    todos: [
      {
        id: 0,
        type: "Important",
        content: "Create sign up sheet for holiday student/parent conferences.",
        members: 4,
        progress: 20,
      },
      {
        id: 1,
        type: "Instructor Meeting",
        content: "Plan holiday demonstration program. Create outline.",
        members: 2,
        progress: 50,
      },
      {
        id: 2,
        type: "Database",
        content:
          "Determine how many boards need to be ordered for testing and demo.",
        members: 2,
        progress: 30,
      },
    ],
  },
  {
    title: "In Progress(2)",
    todos: [
      {
        id: 0,
        type: "Video",
        content: "Create sparring tutorial video for the weekly class.",
        members: 3,
        progress: 90,
      },
      {
        id: 1,
        type: "BUGS FIXINGS",
        content: "Payment gateway needs reauthorization.",
        members: 4,
        progress: 90,
      },
    ],
  },
  {
    title: "Done(3)",
    todos: [
      {
        id: 0,
        type: "Important",
        content: "Action Button needed for Google Maps visits.",
        members: 4,
        progress: 100,
      },
      {
        id: 1,
        type: "Instructor Meeting",
        content: "Plan holiday demonstration program. Create outline.",
        members: 2,
        progress: 100,
      },
      {
        id: 2,
        type: "Database",
        content:
          "Determine how many boards need to be ordered for testing and demo.",
        members: 2,
        progress: 100,
      },
    ],
  },
  {
    title: "Revised(0)",
    todos: [],
  },
]
