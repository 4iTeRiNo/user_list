import { useParams } from "react-router-dom";
import useStore from "../../stores";
import { useEffect } from "react";
import ErrorPage from "../error-page";

export const UserInfo = () => {
  const { User, fetchUser, loading } = useStore();
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    fetchUser(id);
  }, [fetchUser, id]);

  if (!id) {
    return <ErrorPage />;
  }

  return (
    <>{loading === true ? <div>Loading...</div> : <div>{User.name}</div>}</>
  );
};
