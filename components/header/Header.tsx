import React from "react"
import { IoArrowBackCircleSharp } from "react-icons/io5"
import { BiDotsVerticalRounded, BiSolidMessageDetail } from "react-icons/bi"
import { IoPersonAdd } from "react-icons/io5"
import People from "../People"
import { IconType, icons } from "react-icons"
import Progressbar from "./Progressbar"

interface ButtonProps {
  icon?: IconType
  label: string
  fill?: string
}

const Button = ({icon: Icon , label, fill} : ButtonProps) => (
  <button className={`py-2 px-4 rounded-xl flex items-center justify-center gap-3 text-white ${fill ? fill : 'border border-accent-blue'}`}>
    {Icon && <Icon size={20} />}
    <span className="font-bold">{label}</span>
  </button>
)

const Header = () => {
  return (
    <div className="p-7 bg-dark-alt rounded-xl flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 text-off-white">
          <IoArrowBackCircleSharp size={30} />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-white">
              School November Tasks
            </h2>
            <p className="text-sm">
              Created by Instructor Day on November 31, 2022
            </p>
          </div>
        </div>

        {/* Client */}
        <div className="flex items-center gap-3 text-off-white">
          <div className="flex flex-col items-end gap-2">
            <h2 className="font-bold text-lg text-white">
              Centered Martial Arts
            </h2>
            <p className="text-sm">Sunnyvale, Ca</p>
          </div>
          <div className="rounded-md aspect-square w-14 bg-white">
            {/* Company's logo */}
          </div>
          <BiDotsVerticalRounded size={25} />
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap ml-9">
        <div className="flex items-center gap-10">
          <People count={5} reverse />

          <Button label="Invite People" icon={IoPersonAdd} fill="bg-accent-purple"/>
          <Button label="Private"/>
          <Button label="Edit" fill="bg-accent-purple"/>
          <Button label="45 Comments" icon={BiSolidMessageDetail}/>
        </div>

        {/* Progress bar */}

        <Progressbar progress={60}/>
      </div>
    </div>
  )
}

export default Header
