import { Outlet } from "react-router-dom";
import { NavigationLinks } from "../../NavigationLinks";
import { useEffect } from "react";
import useStore from "../../stores";
export const Layout = () => {
  const { fetchUsers } = useStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className="flex flex-row gap-5 bg-sky-800 min-h-screen max-tablet:gap-1">
      <NavigationLinks />
      <Outlet />
    </div>
  );
};
