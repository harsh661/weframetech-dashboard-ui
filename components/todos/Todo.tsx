import React from "react"
import { todos } from "@/constant/todoData"
import { VscCircleFilled } from "react-icons/vsc"
import Progressbar from "../header/Progressbar"
import People from "../People"

const Todo = ({ content, id, members, progress, type }: todos) => {
  let accentColor

  switch (type) {
    case "BUGS FIXINGS":
      accentColor = "#FF4A55"
      break
    case "Database":
      accentColor = "#38E25D"
      break
    case "Important":
      accentColor = "#FFAB2D"
      break
    case "Instructor Meeting":
      accentColor = "#E328AF"
      break
    case "Video":
      accentColor = "#5ECFFF"
      break
    default:
      accentColor = "#fff"
      break
  }

  return (
    <div
      draggable
      className="flex flex-col gap-2 bg-dark-blue p-5 min-w-[248px] rounded-lg"
    >
      <div
        className="text-sm font-semibold flex items-center gap-1"
        style={{ color: accentColor }}
      >
        <VscCircleFilled size={25} />
        {type}
      </div>

      <p className="text-white text-lg font-semibold">{content}</p>

      <Progressbar progress={progress} withoutText color={accentColor} />

      <div className="flex items-center justify-between border-dark-blue my-3">
        <People count={members} />
      </div>
    </div>
  )
}

export default Todo
