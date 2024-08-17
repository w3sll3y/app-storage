import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_ADDRESS = "@market:address";
const STORAGE_CEP = "@market:cep";

type AddressProp = {
  id?: number;
  street?: string;
  number?: number;
  neighborhood?: string;
  state?: string;
  city?: string;
};

async function saveAddress(newAddress: AddressProp) {
  try {
    const existingAddressString = await AsyncStorage.getItem(STORAGE_ADDRESS);
    let address: AddressProp[] = existingAddressString ? JSON.parse(existingAddressString) : [];

    address.push({ id: new Date().getTime(), ...newAddress });

    await AsyncStorage.setItem(STORAGE_ADDRESS, JSON.stringify(address));
  } catch (error) {
    throw error;
  }
}

async function saveCep(newCep: string) {
  try {
    await AsyncStorage.setItem(STORAGE_CEP, newCep);
  } catch (error) {
    throw error
  }
}

async function get() {
  try {
    const addressItem = await AsyncStorage.getItem(STORAGE_ADDRESS);
    return addressItem ? JSON.parse(addressItem) : [];
  } catch (error) {
    throw error;
  }
}

async function getCep() {
  try {
    const cep = await AsyncStorage.getItem(STORAGE_CEP);
    return cep;
  } catch (error) {
    throw error;
  }
}

async function remove(id: number) {
  try {
    const existingAddressString = await AsyncStorage.getItem(STORAGE_ADDRESS);
    let address: AddressProp[] = existingAddressString ? JSON.parse(existingAddressString) : [];

    address = address.filter(item => item.id !== id);

    await AsyncStorage.setItem(STORAGE_ADDRESS, JSON.stringify(address));
  } catch (error) {
    throw error;
  }
}


export const addressStorage = { saveAddress, get, remove, saveCep, getCep };
