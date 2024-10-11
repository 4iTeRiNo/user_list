import { useParams } from "react-router-dom";
import useStore from "../../stores";
import { useEffect } from "react";
import ErrorPage from "../error-page";
import UserFormEdit from "./UserFormEdit";

export const UserInfo = () => {
  const { User, fetchUser, loading, changeIsChange } = useStore();
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    fetchUser(id);
  }, [fetchUser, id]);

  return (
    <>
      {loading === true ? (
        <div>Loading...</div>
      ) : (
        <section className="flex flex-col w-full px-2 pt-5 gap-y-5 max-tablet:justify-center max-tablet:w-full">
          <div className="flex justify-between gap-2 flex-wrap max-tablet:flex-col">
            <h1 className="text-xl font-bold underline text-nowrap max-tablet:text-sm">
              Информация о пользователе
            </h1>
            <button className="button " onClick={changeIsChange}>
              Редактировать
            </button>
          </div>
          {!User && <ErrorPage />}
          {User && <UserFormEdit />}
        </section>
      )}
    </>
  );
};
