import axios from "axios";

async function handleGetItemsData() {
  try {
    const { data } = await axios.get(`https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store/products.json`);
    return data;

  } catch (error) {
    throw error
  }
}

export const ItemsServer = { handleGetItemsData } 