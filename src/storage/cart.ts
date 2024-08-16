import AsyncStorage from '@react-native-async-storage/async-storage';
import EventEmitter from 'eventemitter3';

const STORAGE_CART = "@market:cart";
export const cartEmitter = new EventEmitter();

type ItemProp = {
  id?: number;
  date: string;
  price: number;
  seller: string;
  quantity?: number;
  thumbnailHd: string;
  title: string;
  zipcode: string;
};

async function save(newItem: ItemProp, quantity: number) {
  try {
    const existingItemsString = await AsyncStorage.getItem(STORAGE_CART);
    let items: ItemProp[] = existingItemsString ? JSON.parse(existingItemsString) : [];

    items.push({ id: new Date().getTime(), ...newItem, quantity });

    await AsyncStorage.setItem(STORAGE_CART, JSON.stringify(items));
    cartEmitter.emit('cartUpdated', items);
  } catch (error) {
    throw error;
  }
}

async function get() {
  try {
    const cartItem = await AsyncStorage.getItem(STORAGE_CART);
    return cartItem ? JSON.parse(cartItem) : [];
  } catch (error) {
    throw error;
  }
}

async function update(id: number, newQuantity: number) {
  try {
    const existingItemsString = await AsyncStorage.getItem(STORAGE_CART);
    let items: ItemProp[] = existingItemsString ? JSON.parse(existingItemsString) : [];

    items = items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    await AsyncStorage.setItem(STORAGE_CART, JSON.stringify(items));
    cartEmitter.emit('cartUpdated', items);
  } catch (error) {
    throw error;
  }
}

async function remove(id: number) {
  try {
    const existingItemsString = await AsyncStorage.getItem(STORAGE_CART);
    let items: ItemProp[] = existingItemsString ? JSON.parse(existingItemsString) : [];

    items = items.filter(item => item.id !== id);

    await AsyncStorage.setItem(STORAGE_CART, JSON.stringify(items));
    cartEmitter.emit('cartUpdated', items);
  } catch (error) {
    throw error;
  }
}

async function clear() {
  try {
    await AsyncStorage.removeItem(STORAGE_CART);
    cartEmitter.emit('cartUpdated', []);
  } catch (error) {
    throw error;
  }
}

export const cartStorage = { save, get, update, remove, clear };
