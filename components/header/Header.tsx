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

const Button = ({ icon: Icon, label, fill }: ButtonProps) => (
  <button
    className={`py-2 px-4 rounded-xl flex items-center justify-center gap-3 text-white ${
      fill ? fill : "border border-accent-blue"
    }`}
  >
    {Icon && <Icon size={20} />}
    <span className="font-bold whitespace-nowrap">{label}</span>
  </button>
)

const Header = () => {
  return (
    <div className="lg:p-7 lg:bg-dark-alt rounded-xl flex flex-col gap-5"
    >
      <div className="flex flex-wrap gap-5 items-center justify-between">
        <div className="flex gap-3 text-off-white">
          <IoArrowBackCircleSharp size={30} className="hidden lg:block"/>
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <h2 className="font-bold text-2xl text-white">
              School November Tasks
            </h2>
            <p className="text-sm">
              Created by Instructor Day on November 31, 2022
            </p>
          </div>
        </div>

        {/* Client */}
        <div className="flex flex-row-reverse lg:flex-row items-center gap-3 text-off-white">
          <div className="flex flex-col lg:items-end gap-2 whitespace-nowrap">
            <h2 className="font-bold text-lg text-white">
              Centered Martial Arts
            </h2>
            <p className="text-sm">Sunnyvale, Ca</p>
          </div>
          <div className="rounded-md aspect-square w-14 bg-white">
            {/* Company's logo */}
          </div>
          <BiDotsVerticalRounded size={25} className="hidden lg:block"/>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-5 lg:ml-9">
        <div className="flex flex-wrap items-center gap-5 xl:gap-10 border-dark-alt">
          <People count={5} reverse />

          <Button
            label="Invite People"
            icon={IoPersonAdd}
            fill="bg-accent-purple"
          />
          <Button label="Private" />
          <Button label="Edit" fill="bg-accent-purple" />
          <Button label="45 Comments" icon={BiSolidMessageDetail} />
        </div>

        {/* Progress bar */}

        <Progressbar progress={60} />
      </div>
    </div>
  )
}

export default Header
