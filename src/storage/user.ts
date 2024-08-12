import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_TOKEN = "@market:access_token"

async function save(access_token: string) {
  try {
    await AsyncStorage.setItem(STORAGE_TOKEN, access_token);
  } catch (error) {
    throw error
  }
}

async function get() {
  try {
    const access_token = await AsyncStorage.getItem(STORAGE_TOKEN);
    return access_token;
  } catch (error) {
    throw error
  }
}

async function remove() {
  try {
    await AsyncStorage.removeItem(STORAGE_TOKEN);
  } catch (error) {
    throw error
  }
}

export const userStorage = { save, get, remove }