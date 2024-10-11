import { Link } from "react-router-dom";
import useStore from "../stores";

export const UsersList = () => {
  const { DataUsers } = useStore();

  return (
    <section className="flex flex-col p-4 gap-y-4 w-2/4 max-tablet:justify-start max-tablet:w-full ">
      <span>
        <h1 className="text-xl font-bold underline text-nowrap">
          Список пользователей
        </h1>
        <p className="text-lg text-nowrap max-tablet:text-sm">
          Всего найдено пользователей: {DataUsers.length}
        </p>
      </span>
      {DataUsers.map((user) => (
        <div
          key={user.id}
          className="flex flex-col rounded-md bg-slate-300 p-2 max-tablet:text-sm"
        >
          <span>
            ФИО:
            <p className="inline-flex text-black font-bold pl-2">{user.name}</p>
          </span>

          <span>
            Город:
            <p className="inline-flex text-nowrap text-black font-bold pl-2">
              {user.address.city}
            </p>
          </span>
          <span className="flex justify-start max-tablet:flex-wrap">
            <span className="flex">
              Компания:
              <p className="inline-flex text-nowrap text-black font-bold pl-2">
                {user.company.name}
              </p>
            </span>
            <Link
              to={`/users/user/${user.id}`}
              className="text-blue-600 text-end flex-1 hover:text-opacity-55"
            >
              Подробнее
            </Link>
          </span>
        </div>
      ))}
    </section>
  );
};
