import axios from "axios";
import { api } from "./api";
import { userStorage } from "@/storage/user";

async function handleGetCardsData() {
  const token = await userStorage.get();
  try {
    const { data } = await api.get(`/cards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;

  } catch (error) {
    throw error
  }
}

export const CardsServer = { handleGetCardsData } 