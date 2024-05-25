import { HeaderDropdownMenuOptions } from "@/sections/shared/interfaces/menuInterfaces";
import { RiPlayList2Fill } from "react-icons/ri";

const menuOptions: HeaderDropdownMenuOptions[] = [
  { id: 1, name: "My lists", link: "/my-lists", icon: <RiPlayList2Fill /> },
];

export default menuOptions;
