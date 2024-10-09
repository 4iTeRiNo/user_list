import { HomeButton } from "../HomeButton";
import useStore from "../stores";

export const NavigationLinks = () => {
  const { sortByCity, sortByCompany } = useStore();

  return (
    <header className="flex flex-col gap-5 w-1/5 items-start p-4 bg-second">
      <h2 className="text-xl font-bold underline">Сортировка</h2>
      <button onClick={sortByCity} className="button">
        По городу
      </button>
      <button onClick={sortByCompany} className="button ">
        По Компании
      </button>
      <HomeButton />
    </header>
  );
};
