import { useForm, Controller } from "react-hook-form";
import {
  ErrorKeyMessage,
  UserAddress,
  UserForm,
  UserInfo,
} from "../../../shared/types";
import useStore from "../../stores";
import { FormsUserAddress, FormsUserInfo } from "../../../shared/constant";
import ParseTextarea from "../../ParseTextarea";
import { useState } from "react";
import { Loader } from "../../Loader";

export default function UserFormEdit() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserForm>();
  const { User, isChange, changeIsChange } = useStore();
  const [isShowResult, setIsShowResult] = useState<ErrorKeyMessage>("loading");
  const [isShowLoader, setIsShowLoader] = useState<boolean>(false);

  const onSubmit = async (data: UserForm) => {
    const formData = new FormData();

    setIsShowLoader(true);

    formData.append("access_key", "b301e687-af2a-43b5-8bea-5ca49d0bc77f");
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    setTimeout(() => setIsShowLoader(false), 3000); // Показываем лоадер 3 сек
    if (res.success) {
      setIsShowResult("success");
      changeIsChange();
    } else {
      setIsShowResult("error");
      changeIsChange();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="bg-slate-300 p-2 rounded-md"
    >
      <span className="flex w-full justify-center">
        {isShowLoader && <Loader isShowResult={isShowResult} />}
      </span>
      {FormsUserInfo.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.register_name}
            className="p-3 appearance-auto border-spacing-2 border-black"
          >
            <span className="font-bold text-base">{form.placeholder}</span>

            <input
              {...register(form.register_name as keyof UserInfo, {})}
              required
              id={form.register_name}
              autoComplete="off"
              disabled={isChange}
              defaultValue={
                User ? User[form.register_name as keyof UserInfo] : ""
              }
              placeholder={form.placeholder}
              type={form.type}
              className={`w-full text-black pl-[10px] rounded-lg text-lg placeholder:text-base 
                focus-visible:outline-none h-[35px] appearance-none ${
                  isChange && "bg-transparent"
                } ${
                errors[form.register_name as keyof UserInfo] &&
                "border-red-600 border-2"
              }`}
            />
            {errors[form.register_name as keyof UserInfo] && (
              <span className="text-[12px] text-errorMessage">
                {`${errors[form.register_name as keyof UserInfo]?.message}` ||
                  "Введите корректные данные"}
              </span>
            )}
          </label>
        );
      })}
      {FormsUserAddress.map((form) => {
        return (
          <label
            key={form.id}
            htmlFor={form.register_name}
            className="p-3 appearance-auto border-spacing-2 border-black"
          >
            <span className="font-bold text-base">{form.placeholder}</span>

            <input
              {...register(form.register_name as keyof UserAddress, {})}
              id={form.register_name}
              autoComplete="off"
              disabled={isChange}
              defaultValue={
                User
                  ? User.address[form.register_name as keyof UserAddress]
                  : ""
              }
              placeholder={form.placeholder}
              type={form.type}
              className={`w-full text-black pl-[10px] rounded-lg text-lg placeholder:text-base 
                focus-visible:outline-none h-[35px] appearance-none ${
                  isChange ? "bg-transparent" : ""
                }`}
            />
            {errors[form.register_name as keyof UserAddress] && (
              <span className="text-[12px] text-errorMessage">
                {`${
                  errors[form.register_name as keyof UserAddress]?.message
                }` || "Введите корректные данные"}
              </span>
            )}
          </label>
        );
      })}
      <label htmlFor="summary" className="flex flex-col text-lg w-1/2 gap-2">
        <span className="font-bold text-base">Расскажите о себе</span>
        <Controller
          name="summary"
          control={control}
          render={({ field }) => <ParseTextarea {...field} />}
          defaultValue=""
        />
      </label>
      <button
        disabled={isChange}
        className={`bg-blue-600 p-2 rounded-md float-end ${
          !isChange || errors ? "" : "cursor-not-allowed"
        }`}
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
}
