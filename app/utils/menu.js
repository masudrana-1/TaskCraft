import { list, check, todo, home } from "./Icons"

const menu = [
    {
        id: 1,
        title: "All Tasks",
        icon: home,
        link: "/",
    },
    {
        id: 2,
        title: "Important",
        icon: list,
        link: "/important",
    },
    {
        id: 3,
        title: "completed",
        icon: check,
        link: "/completed",
    },
    {
        id: 4,
        title: "Todo",
        icon: todo,
        link: "/todo",
    },
]