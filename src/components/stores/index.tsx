// src/stores/counter-store.ts
import { createStore } from "zustand";
import { UserList } from "../../shared/types";

export type UsersState = {
  DataUsers: UserList;
  isChange: boolean;
};

export type UsersActions = {
  sortBySite: () => void;
  sortByCompany: () => void;
};

export type UsersStore = UsersActions & UsersState;

export const defaultInitState: UsersState = {
  DataUsers: [],
  isChange: false,
};

export const createUserStore = (initState: UsersState = defaultInitState) => {
  return createStore<UsersStore>()(() => ({}));
};

