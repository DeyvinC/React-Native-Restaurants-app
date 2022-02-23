import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import RestaurantCard from '../components/RestaurantCard';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    // fetch data from api
    fetch('https://bocacode-intranet-api.web.app/restaurants')
    .then(response => response.json())
    .then(data => setRestaurants(data))
    .catch(alert);
    console.log(setRestaurants)
  }, [])
  const navigation = useNavigation()
  const goToNewRestaurant = () =>{
    navigation.navigate('NewRestaurant')
}
  return(
  <View>
    <Button title='Add New restaurant'
    onPress={goToNewRestaurant} 
    buttonStyle={{
      backgroundColor: 'black',
      borderRadius: 20,
    }}
    containerStyle={{
    width: 200,
    alignSelf: 'center',
    marginHorizontal: '50%',
    marginVertical: 10,
    
   }} />
  { !restaurants
    ?<Text>Loading...</Text>
    : <ScrollView>
      {restaurants.map(restaurant => {
      return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      })}
      </ScrollView>
  }
  </View>
  )
}

export default RestaurantList;