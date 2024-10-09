import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="button" type="button" onClick={() => navigate("/")}>
      На главную
    </button>
  );
};
