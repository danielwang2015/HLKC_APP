import { AsyncStorage } from 'react-native';
import {
  LOCAL_ACCESS_TOKEN_NAME,
  User_ID_Key,
  User_SIGN_STSTUS,
} from './config';

export async function setAccessToken(token) {
  await AsyncStorage.setItem(LOCAL_ACCESS_TOKEN_NAME, token);
}

export async function getAccessToken() {
  return await AsyncStorage.getItem(LOCAL_ACCESS_TOKEN_NAME);
}

export async function removeAccessToken() {
  return await AsyncStorage.removeItem(LOCAL_ACCESS_TOKEN_NAME);
}

export async function setUserID(UserID) {
  await AsyncStorage.setItem(User_ID_Key, UserID.toString());
}

export async function getUserID() {
  return await AsyncStorage.getItem(User_ID_Key);
}

export async function removeUserID() {
  return await AsyncStorage.removeItem(User_ID_Key);
}

export async function setSignON(Status) {
  await AsyncStorage.setItem(User_SIGN_STSTUS, Status.toString());
}

export async function getSignON() {
  return await AsyncStorage.getItem(User_SIGN_STSTUS);
}

export async function removeSignON() {
  return await AsyncStorage.removeItem(User_SIGN_STSTUS);
}
