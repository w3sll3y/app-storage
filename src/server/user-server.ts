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

export const UserServer = { handleLogin, handleGetUserData, handleSingUp } 