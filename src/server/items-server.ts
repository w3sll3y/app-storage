import axios from "axios";

export type ItemsProp = {
  title: string,
  price: number,
  zipcode: string,
  seller: string,
  thumbnailHd: string,
  date: string
}

async function handleGetItemsData() {
  try {
    const { data } = await axios.get(`https://raw.githubusercontent.com/stone-pagamentos/desafio-mobile/master/store/products.json`);
    return data;

  } catch (error) {
    throw error
  }
}

export const ItemsServer = { handleGetItemsData } 