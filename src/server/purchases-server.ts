import { userStorage } from "@/storage/user";
import { api } from "./api";

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

async function handleGetPurchaseById(id: number) {
  try {
    const token = await userStorage.get();
    const { data } = await api.get(`/purchases/${id}`,
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

export const PurchaseServer = { handleGetPurchasesData, handleGetPurchaseById } 