import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Header, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function AddNewRestaurant() {
   
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [newRestaurant, setNewRestaurant] = useState({});

    const navigation = useNavigation()

    

    useEffect(() => {
        if(
            newRestaurant.address && 
            newRestaurant.name && 
            newRestaurant.numRatings !== undefined){
            setBtnDisabled(false)
        }
    }, [newRestaurant])

    const sendNewRestaurantInfo = () => {
        if(newRestaurant.name !== undefined && newRestaurant.address !== undefined) {
        fetch('https://bocacode-intranet-api.web.app/restaurants', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
        .then(() => alert('New Restaurant Added'))
        .then(() => navigation.navigate('Home'))
        .catch(err => console.error(err))
    }else{
        alert('Wrong Info')
    }
    }

    return (
        <View>
            <Input placeholder='Restaurant Name' spellCheck
                onChangeText={text => setNewRestaurant(
                    {...newRestaurant,name: text}) }
            />
            <Input placeholder='Address' onChangeText={text => setNewRestaurant(
                    {...newRestaurant,address: text}) } />
            <Input placeholder='Photo' keyboardType='url' onChangeText={text => setNewRestaurant(
                    {...newRestaurant,photoUrl: 'https://bocacenter.com/wp-content/uploads/2015/12/infomain-tap-42.jpg'})} />
            <Input placeholder='Rating' keyboardType='numeric' onChangeText={text => setNewRestaurant(
                    {...newRestaurant,numRatings: text})} />
            <Button title='Create new restaurant' 
            onPress={sendNewRestaurantInfo} 
            disabled ={btnDisabled}/>
        </View>
    )
}