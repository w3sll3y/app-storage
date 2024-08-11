import { View, StatusBar } from 'react-native';

import { Tabs } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import Loading from '@/components/Loading';

export default function TabLayout() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="house" color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="cart-shopping" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="user-large" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
