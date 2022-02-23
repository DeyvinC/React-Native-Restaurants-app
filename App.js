import { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantListScreens from './src/screens/RestaurantListScreens';
import DetailsScreen from './src/screens/DetailsScreen';
import AddNewRestaurant from './src/screens/NewRestaurantScreen';

const Stack = createNativeStackNavigator();
export const RestaurantContext = createContext();

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  return (
    <NavigationContainer>
      <RestaurantContext.Provider 
      value={{ selectedRestaurant, setSelectedRestaurant }}>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={RestaurantListScreens} />
      <Stack.Screen name='Details' component={DetailsScreen} />
      <Stack.Screen name='NewRestaurant' component={AddNewRestaurant} />
      </Stack.Navigator>
      </RestaurantContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
