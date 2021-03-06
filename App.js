import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView,Image ,TextInput,Dimensions} from 'react-native';
import Card from './src/components/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack=createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
          <Stack.Navigator 
                screenOptions={{
        headerStyle: {
          backgroundColor: '#ffa500',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
          
          >
               <Stack.Screen name="Home" component={HomeScreen}/>
               <Stack.Screen name="Details" component={DetailsScreen} options={({route})=>({
                     title:route.params.recipeItem.name,
               })}/>
          </Stack.Navigator>
        </NavigationContainer>

    )
    
}

