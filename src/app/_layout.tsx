import { StatusBar, View } from 'react-native';

import { FontAwesome6 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import Loading from '@/components/Loading';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter';

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
      <Tabs
        screenOptions={{ tabBarActiveTintColor: '#1A1A1A', headerShown: false, tabBarShowLabel: false }}
      >
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
        <Tabs.Screen
          name="login"
          options={{
            href: null,
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="user-large" color={color} />,
          }}
        />
        <Tabs.Screen
          name="signup"
          options={{
            href: null,
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="user-large" color={color} />,
          }}
        />
        <Tabs.Screen
          name="checkout"
          options={{
            href: null,
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="user-large" color={color} />,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            href: null,
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="user-large" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
