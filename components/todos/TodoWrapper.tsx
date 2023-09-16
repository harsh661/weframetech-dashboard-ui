import React from "react"
import { TbSquareRoundedPlusFilled } from "react-icons/tb"

interface TodoWrapperProps {
  children: React.ReactNode
  title: string
}

const TodoWrapper: React.FC<TodoWrapperProps> = ({ children, title }) => {
  return (
    <div className="w-80 flex flex-col gap-5">
      <header className="flex w-full items-center justify-between p-5 text-white">
        <h2 className="font-bold text-xl">{title}</h2>

        <TbSquareRoundedPlusFilled size={40} className={"text-accent-purple"}/>
      </header>
      {children}
    </div>
  )
}

export default TodoWrapper
