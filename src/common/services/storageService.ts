import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveToStorage(key: string, data: any) {
  try {
    const value = JSON.stringify(data);
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error("Cannot save to async storage", err);
  }
}

export async function getByKey(key: string) {
  try {
    const unparsedData = await AsyncStorage.getItem(key);
    if (!unparsedData) return null;
    return JSON.parse(unparsedData);
  } catch (err) {
    console.error("Cannot read from async storage", err);
  }
}

const storageService = {
  saveToStorage,
  getByKey,
};

export default storageService;
