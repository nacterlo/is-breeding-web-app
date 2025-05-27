import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SlackIcon,
  SquareTerminalIcon,
} from "lucide-react"

import { NavMain } from "@/shared/ui/nav-main"
import { NavProjects } from "@/shared/ui/nav-projects"
import { NavUser } from "@/shared/ui/nav-user"
import { TeamSwitcher } from "@/shared/ui/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/shared/ui/kit/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Uladzislau P.",
    email: "nacterlo",
  },
  teams: [
    {
      name: "РУСП МИНСКОЕ ПП",
      logo: GalleryVerticalEnd,
      plan: "ГПП-Элевер",
    },
    {
      name: "РУСП МИНСКОЕ ПП",
      logo: AudioWaveform,
      plan: "Молочный КРС",
    },
    {
      name: "РУСП МИНСКОЕ ПП",
      logo: Command,
      plan: "Мясной КРС",
    },
  ],
  navMain: [
    {
      title: "Племкарточки",
      url: "#",
      icon: SquareTerminalIcon,
      isActive: true,
      // items: [
      //   {
      //     title: "Общие данные",
      //     url: "#",
      //   },
      //   {
      //     title: "Занесение информации",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Учет семени",
      url: "#",
      icon: SlackIcon,
      items: [
        {
          title: "Журнал учета",
          url: "#",
        },
        {
          title: "Накопление спермы",
          url: "#",
        },
        {
          title: "Реализация спермы",
          url: "#",
        },
        {
          title: "Выбраковка спермы",
          url: "#",
        },
        {
          title: "Покупка семени",
          url: "#",
        },
        {
          title: "Перемещение семени",
          url: "#",
        },
      ],
    },
    {
      title: "Оперативная информация",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Контрольные доения",
          url: "#",
        },
        {
          title: "Взвешивания",
          url: "#",
        },
        {
          title: "Перемещение",
          url: "#",
        },
      ],
    },
    {
      title: "Документация",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "НСИ",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "*************",
          url: "#",
        },
        {
          title: "********",
          url: "#",
        },
      ],
    },
    {
      title: "Параметры",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Мой аккаунт",
          url: "#",
        },
        {
          title: "Информация о предприятии",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
