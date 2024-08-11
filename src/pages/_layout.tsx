import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="singUp/index" options={{}} />
      <Stack.Screen name="login" options={{}} />
    </Stack>
  );
}
