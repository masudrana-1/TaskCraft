// import { list, check, todo, home } from ""

import { FaHome, FaList, FaCheck, FaTasks, FaCross, FaStar } from "react-icons/fa";

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
        icon: <FaStar/>,
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
        title: "Incomplete",
        icon: <FaTasks/>,
        link: "/incomplete",
    },
];

export default menu;