import { UserInfo } from "../../components/routes/UserInfo";

export type UserList = User[];

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserInfo = Pick<
  User,
  "id" | "name" | "email" | "website" | "phone" | "username"
>;

export type UserAddress = Pick<Address, "city" | "street" | "zipcode">;
export type UserForm = UserInfo &
  UserAddress & {
    summary: string;
  };

export enum FormRegisterName {
  name = "name",
  username = "username",
  email = "email",
  street = "street",
  city = "city",
  website = "website",
  phone = "phone",
  zipcode = "zipcode",
}

export type FormProps = {
  id: number;
  register_name: FormRegisterName;
  validate: (str: string) => boolean;
  message: string;
  type: string;
  placeholder: string;
};

export type ErrorKeyMessage =
  | "error"
  | "success"
  | "warning"
  | "info"
  | "loading";
