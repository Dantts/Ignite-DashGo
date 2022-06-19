import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export const useUsers = (page: number) => {
  return useQuery([`@dashgo/users`, page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get("/users", { params: { page } });
  const totalCount = Number(headers["x-total-count"]);
  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return { users, totalCount };
};
