import { ActivityIndicator } from "react-native";

export default function Loading() {
  return <ActivityIndicator style={{ flex: 1, backgroundColor: 'white', alignContent: 'center', justifyContent: 'center' }} />
}