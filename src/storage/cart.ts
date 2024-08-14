import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_CART = "@market:cart"

async function save(item: string) {
  try {
    await AsyncStorage.setItem(STORAGE_CART, item);
  } catch (error) {
    throw error
  }
}

async function get() {
  try {
    const cart_item = await AsyncStorage.getItem(STORAGE_CART);
    return cart_item;
  } catch (error) {
    throw error
  }
}

async function remove() {
  try {
    await AsyncStorage.removeItem(STORAGE_CART);
  } catch (error) {
    throw error
  }
}

export const cartStorage = { save, get, remove }