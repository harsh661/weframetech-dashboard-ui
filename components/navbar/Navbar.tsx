import React from "react"
import { BiSearch } from "react-icons/bi"
import { HiBell } from "react-icons/hi"
import { MdVideoLibrary } from "react-icons/md"
import { RiTaskFill } from "react-icons/ri"
import { AiFillCaretDown } from "react-icons/ai"

const IconList = () => {
  const items = [
    {
      label: "notification",
      icon: HiBell,
      count: 12,
    },
    {
      label: "course",
      icon: MdVideoLibrary,
      count: 5,
    },
    {
      label: "done",
      icon: RiTaskFill,
      count: 2,
    },
    {
      label: "file",
      icon: MdVideoLibrary,
      count: 1,
    },
  ]
  return (
    <div className="flex items-center gap-8">
      {items.map((item) => (
        <div key={item.label} className="relative text-main-text cursor-pointer hover:text-accent-purple">
          <item.icon size={25} />
          <span className="flex items-center justify-center text-xs font-bold bg-accent-blue text-black w-5 h-5 rounded-full absolute -top-2 -right-1">
            {item.count}
          </span>
        </div>
      ))}
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-20 w-full bg-dark-alt py-6 px-10 whitespace-nowrap">
      {/* Search bar */}
      <div className="flex items-center py-3 px-5 w-full bg-dark-blue rounded-full">
        <span className="text-main-text">
          <BiSearch size={25} />
        </span>
        <input
          type="text"
          className="bg-transparent border-none outline-none text-white pl-2"
          placeholder="Search here"
        />
      </div>

      <span className="text-accent-purple underline font-bold cursor-pointer">
        OTHER MENUS
      </span>

      <IconList />

      {/* Language */}
      <div className="bg-dark-blue py-3 px-4 rounded-full flex items-center gap-2">
        <span className="w-5 aspect-square rounded-full">
          <img
            src="https://i.ibb.co/9sdcfxH/united-states.png"
            alt="American-flag"
            className="w-full h-full"
          />
        </span>
        <select id="language" name="language" className="bg-transparent border-none outline-none text-white">
          <option value="eng-us">English</option>
        </select>
      </div>

      {/* User */}
      <div className="flex items-center gap-5 cursor-pointer">
        <div className="rounded-md w-10 aspect-square bg-off-white">
          {/* User image goes here */}
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-off-white font-bold">Instructor Roy</h3>
          <span className="text-sm text-main-text">Super Admin</span>
        </div>
        <AiFillCaretDown size={20} className="text-accent-purple"/>
      </div>
    </div>
  )
}

export default Navbar
