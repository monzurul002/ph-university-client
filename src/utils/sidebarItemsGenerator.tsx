import { NavLink } from "react-router-dom";
import { TSidebarRoute, TUserPaths } from "../types";

export const sidebarItemsGenerator = (items: TUserPaths[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarRoute[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return sidebarItems;
};
