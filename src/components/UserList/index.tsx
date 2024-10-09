import { Link } from "react-router-dom";
import useStore from "../stores";

export const UsersList = () => {
  const { DataUsers } = useStore();

  return (
    <section className="flex flex-col gap-4 w-2/4">
      <span>
        <h1 className="text-xl font-bold underline">Список пользователей</h1>
        <p className="text-lg">
          Всего найдено пользователей: {DataUsers.length}
        </p>
      </span>
      {DataUsers.map((user) => (
        <div
          key={user.id}
          className="flex flex-col rounded-md bg-slate-300 p-2"
        >
          <span>
            ФИО:&emsp;
            <p className="inline-flex text-black font-bold">{user.name}</p>
          </span>

          <span>
            Город:&emsp;
            <p className="inline-flex text-black font-bold">
              {user.address.city}
            </p>
          </span>
          <span className="flex justify-start">
            Компания:&emsp;
            <p className="inline-flex text-black font-bold">
              {user.company.name}
            </p>
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
