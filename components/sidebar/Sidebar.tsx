import React from "react"
import { FiMenu } from "react-icons/fi"
import { TbGridDots, TbArrowNarrowRight } from "react-icons/tb"
import { sidebarLinks } from "./sidebarLinks"
import SidebarItems from "./SidebarItems"

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-[#066dcd] to-[#15a5f1] text-white rounded-3xl px-5 py-7 flex flex-col justify-center relative overflow-hidden my-auto">
      <TbGridDots size={25} />
      <p className="text-xl font-bold">
        Increase your
        <br />
        work with kanban
      </p>
      <TbArrowNarrowRight size={25} />
      <div className="h-40 w-40 rounded-full bg-accent-blue/50 absolute top-1/4 left-2/3" />
    </div>
  )
}

const Sidebar = () => {
  return (
    <section className="bg-dark-alt h-full w-full max-w-[345px] flex flex-col px-12">
      <div className="flex items-center justify-between py-10 shadow-md">
        <h1 className="text-2xl text-white w-full text-center">weframetech</h1>
        <span className="text-main-text">
          <FiMenu size={28} />
        </span>
      </div>
      <div className="flex flex-col py-3">
        <h2 className="text-off-white font-bold">MAIN MENU</h2>

        <div className="py-3 flex flex-col gap-3">
          {sidebarLinks.map((item) => {
            return <SidebarItems key={item.label} {...item} />
          })}
        </div>
      </div>

      <Banner />
    </section>
  )
}

export default Sidebar
