import { IconType } from "react-icons"
import {
  IoSpeedometerSharp,
  IoMail,
  IoChatbubblesSharp,
  IoGrid,
  IoReceipt,
  IoSettingsSharp,
} from "react-icons/io5"
import { RiContactsBook2Fill } from "react-icons/ri"
import { FaCalendar } from "react-icons/fa"
import { FaShop } from "react-icons/fa6"
import { MdVideoLibrary } from "react-icons/md"

export type SidebarLink = {
  icon: IconType
  label: string
  isNew?: boolean
  notifications?: number
  selected?: boolean
  withArrow?: boolean
}

export const sidebarLinks: SidebarLink[] = [
  {
    icon: IoSpeedometerSharp,
    label: "Dashboard",
  },
  {
    icon: IoMail,
    label: "Email",
    notifications: 17,
    withArrow: true,
  },
  {
    icon: IoChatbubblesSharp,
    label: "Chat",
  },
  {
    icon: IoGrid,
    label: "Kanban",
    selected: true,
    withArrow: true,
  },
  {
    icon: RiContactsBook2Fill,
    label: "Contact",
    isNew: true,
  },
  {
    icon: FaCalendar,
    label: "Calendar",
  },
  {
    icon: MdVideoLibrary,
    label: "Courses",
    withArrow: true,
  },
  {
    icon: FaShop,
    label: "Shop",
  },
  {
    icon: IoReceipt,
    label: "Invoices",
    withArrow: true,
  },
  {
    icon: IoSettingsSharp,
    label: "Settings",
  },
]
