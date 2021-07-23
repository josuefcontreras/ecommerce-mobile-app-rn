import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveLocal(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function getValueFor(key: string) {
  const res = await AsyncStorage.getItem(key);
  return res;
}

export async function deleteLocal(key: string) {
  await AsyncStorage.removeItem(key);
}
