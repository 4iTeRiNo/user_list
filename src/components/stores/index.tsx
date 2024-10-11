import { create } from "zustand";
import { User, UserList } from "../../shared/types";
import { baseUrl } from "../../shared/constant";

export type UsersState = {
  DataUsers: UserList;
  User: User | null;
  isChange: boolean;
  loading: boolean;
  error: unknown;
};

export type UsersActions = {
  sortByCity: () => void;
  sortByCompany: () => void;
  fetchUsers: () => Promise<void>;
  fetchUser: (id: string) => Promise<void>;
  changeIsChange: () => void;
};

export type UsersStore = UsersActions & UsersState;
const createUserStore = create<UsersStore>((set) => ({
  DataUsers: [],
  User: null,
  error: null,
  isChange: false,
  loading: false,
  sortByCity: () =>
    set((state) => ({
      DataUsers: state.DataUsers.sort((a, b) =>
        a.address.city.localeCompare(b.address.city)
      ),
    })),
  sortByCompany: () =>
    set((state) => ({
      DataUsers: state.DataUsers.sort((a, b) =>
        a.company.name.localeCompare(b.company.name)
      ),
    })),
  changeIsChange: () => set((state) => ({ isChange: !state.isChange })),
  fetchUsers: async () => {
    try {
      set(() => ({ loading: true }));
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      const response = await fetch(`${baseUrl}/users`);
      if (!response.ok) throw response;

      const data = await response.json();

      set({ DataUsers: data, loading: false, error: null });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  },
  fetchUser: async (id) => {
    try {
      set(() => ({ loading: true }));
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      const response = await fetch(`${baseUrl}/users/${id}`);
      if (!response.ok) throw response;
      const data = await response.json();
      set({ User: data, error: null });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  },
}));

export default createUserStore;

