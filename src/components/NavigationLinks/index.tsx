import { HomeButton } from "../HomeButton";
import useStore from "../stores";

export const NavigationLinks = () => {
  const { sortByCity, sortByCompany } = useStore();

  return (
    <header className="flex flex-col gap-5 w-1/3 items-start p-4 bg-sky-950  max-tablet:p-1 max-tablet:w-1/3">
      <h2 className="text-xl font-bold underline  max-tablet:text-sm">
        Сортировка
      </h2>
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
