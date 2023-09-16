import React from "react"
import { IconType } from "react-icons"
import { FiChevronRight } from "react-icons/fi"
import { SidebarLink } from "./sidebarLinks"

const SidebarItems = ({
  icon: Icon,
  label,
  isNew,
  notifications,
  selected,
  withArrow,
}: SidebarLink) => {
  return (
    <div
      className={`flex items-center justify-between py-2 ${
        selected ? "text-accent-purple" : "text-main-text"
      }`}
    >
      <div className="flex items-center gap-7">
        <Icon size={25} />
        <span className="text-lg font-semibold">{label}</span>
      </div>
      {isNew && (
        <span className="py-1 px-2 rounded-xl text-xs font-bold text-white bg-accent-pink">
          NEW
        </span>
      )}
      {notifications && (
        <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold bg-accent-blue text-white">
          {notifications}
        </span>
      )}
      {withArrow && <FiChevronRight size={25} />}
    </div>
  )
}

export default SidebarItems
