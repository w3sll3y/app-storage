import { userStorage } from "@/storage/user";
import { api } from "./api";

type LoginProps = {
  email: string;
  password: string
}

type SignUpProps = {
  name: string;
  email: string;
  password: string
}

type Token = {
  access_token: string;
}

export type User = {
  id: string;
  email: string;
  name: string;
}

type PurchaseProps = {
  items: ItemSell[];
  number: string;
  name: string;
  dueDate: string;
  code: string;
  total: number;
};

type ItemSell = {
  price: number;
  seller: string;
  thumbnailHd: string;
  title: string;
};

async function handleLogin({ email, password }: LoginProps) {
  try {
    const { data } = await api.post<{ access_token: Token }>("/login", {
      email,
      password
    });
    return data.access_token;
  } catch (error) {
    throw error
  }
}

async function handleSingUp({ name, email, password }: SignUpProps) {
  try {
    const { data } = await api.post("/user", {
      name,
      email,
      password
    });
    return data;
  } catch (error) {
    throw error
  }
}

async function handleGetUserData() {
  try {
    const { data } = await api.get<{ user: User }>(`/me`);
    return data.user;

  } catch (error) {
    throw error
  }
}

async function handlePurchase({ items, code, dueDate, name, number, total }: PurchaseProps) {
  const token = await userStorage.get();
  try {
    const { data } = await api.post(
      "/purchases",
      {
        items,
        code,
        dueDate,
        name,
        number,
        total
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;

  } catch (error) {
    throw error;
  }
}

export const UserServer = { handleLogin, handleGetUserData, handleSingUp, handlePurchase } 