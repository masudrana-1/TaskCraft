// import { list, check, todo, home } from ""

import { FaHome, FaList, FaCheck, FaTasks } from "react-icons/fa";

const menu = [
    {
        id: 1,
        title: "All Tasks",
        icon: <FaHome/>,
        link: "/",
    },
    {
        id: 2,
        title: "Important",
        icon: <FaList/>,
        link: "/important",
    },
    {
        id: 3,
        title: "completed",
        icon: <FaCheck/>,
        link: "/completed",
    },
    {
        id: 4,
        title: "Do It Now",
        icon: <FaTasks/>,
        link: "/incomplete",
    },
];

export default menu;