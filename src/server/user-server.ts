import { userStorage } from "@/storage/user";
import { api } from "./api";
import { ToastMessage } from "@/utils/toastMessages";

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
  zipcode: string;
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
    ToastMessage.errorToast(
      'Tente novamente!',
      'Email ou senha incorretos.'
    )
  }
}

async function handleSingUp({ name, email, password }: SignUpProps) {
  try {
    const { data } = await api.post("/user", {
      name,
      email,
      password
    });
    ToastMessage.successToast(
      'Bem-Vindo!🎉',
      'Cadastro feito com sucesso!'
    )
    return data;
  } catch (error: any) {
    if (error?.response?.status) {
      ToastMessage.errorToast(
        'Tente novamente!',
        `Email já cadastrado.`
      )
    }
  }
}

async function handleGetUserData() {
  const token = await userStorage.get();
  try {
    const { data } = await api.get(`/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;

  } catch (error) {
    throw error
  }
}

async function handlePurchase({ items, code, dueDate, name, number, total, zipcode }: PurchaseProps) {
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
        total,
        zipcode
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;

  } catch (error) {
    return ToastMessage.errorToast(
      'Algo deu errado.😔',
      'Tente novamente'
    )
  }
}

export const UserServer = { handleLogin, handleGetUserData, handleSingUp, handlePurchase } 