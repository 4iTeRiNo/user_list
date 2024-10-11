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
        <section className="flex flex-col w-1/2 pt-5  gap-y-5">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold underline">
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
