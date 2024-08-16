import Loading from '@/components/Loading';
import { cartEmitter, cartStorage } from '@/storage/cart';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import { FontAwesome6 } from '@expo/vector-icons';
import { Tabs, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { ItemProp } from '@/types/item';

export default function TabLayout() {
  const [items, setItems] = useState<ItemProp[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  useFocusEffect(
    useCallback(() => {
      async function fetchItems() {
        const data = await cartStorage.get();
        setItems(data || []);
        calculateTotalQuantity(data || []);
      }

      fetchItems();

      const onCartUpdated = () => {
        fetchItems();
      };

      cartEmitter.on('cartUpdated', onCartUpdated);

      return () => {
        cartEmitter.off('cartUpdated', onCartUpdated);
      };
    }, [])
  );

  const calculateTotalQuantity = (items: ItemProp[]) => {
    const total = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    setTotalQuantity(total);
  };

  if (!fontsLoaded) {
    return <Loading />;
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
            tabBarIcon: ({ color }) => (
              <View>
                <FontAwesome6 size={28} name="cart-shopping" color={color} />
                {totalQuantity > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      right: -10,
                      top: -5,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 10,
                      width: 15,
                      height: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: '#000', fontSize: 8, fontWeight: 900 }}>{totalQuantity}</Text>
                  </View>
                )}
              </View>
            ),
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
