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

async function handleGetPurchasesData() {
  try {
    const token = await userStorage.get();
    const { data } = await api.get(`/purchases`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return data;

  } catch (error) {
    throw error
  }
}

export const PurchaseServer = { handleGetPurchasesData } 