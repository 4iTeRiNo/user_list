import { FormProps, FormRegisterName } from "../types";

export const baseUrl = "https://jsonplaceholder.typicode.com";

export const FormsUserInfo: FormProps[] = [
  {
    id: 1,
    register_name: FormRegisterName.name,
    validate: (str: string) => str.length > 0,
    message: "Name is required",
    type: "text",
    placeholder: "Имя",
  },
  {
    id: 2,
    register_name: FormRegisterName.username,
    validate: (str: string) => str.length > 0,
    message: "Username is required",
    type: "text",
    placeholder: "Имя пользователя",
  },
  {
    id: 3,
    register_name: FormRegisterName.email,
    validate: (str: string) => str.length > 0,
    message: "Email is required",
    type: "text",
    placeholder: "Email",
  },

  {
    id: 4,
    register_name: FormRegisterName.phone,
    validate: (str: string) => str.length > 0,
    message: "Phone is required",
    type: "text",
    placeholder: "Номер телефона",
  },
  {
    id: 5,
    register_name: FormRegisterName.website,
    validate: (str: string) => str.length > 0,
    message: "Website is required",
    type: "text",
    placeholder: "Сайт",
  },
];

export const FormsUserAddress: FormProps[] = [
  {
    id: 1,
    register_name: FormRegisterName.street,
    validate: (str: string) => str.length > 0,
    message: "Street is required",
    type: "text",
    placeholder: "Улица",
  },
  {
    id: 2,
    register_name: FormRegisterName.city,
    validate: (str: string) => str.length > 0,
    message: "City is required",
    type: "text",
    placeholder: "Город",
  },

  {
    id: 3,
    register_name: FormRegisterName.zipcode,
    validate: (str: string) => str.length > 0,
    message: "Zip code name is required",
    type: "text",
    placeholder: "Zip code",
  },
];
