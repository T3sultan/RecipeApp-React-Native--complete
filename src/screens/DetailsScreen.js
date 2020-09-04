import React from 'react'
import { StyleSheet, Text, ScrollView,Image, View } from 'react-native'
import Card from '../components/Card';

export default function DetailsScreen({route}) {
    const item=route.params.recipeItem;
    const {name,imageURL,ingredients, steps}=item
   
    return (
       <ScrollView>
           <Image style={{height:350,width:"100%"}}
               source={{uri:imageURL}}
               resizeMode="cover"
           />
           <View style={{margin:20}}>
           <Text style={{fontSize:18 ,marginBottom:10}}>Ingredients</Text>
           <Card customStyle={{padding:20}}>
               {ingredients.map((ingredient,index)=>{
                   return(
                       <View key={ingredient.name}>
                       <Text style={{fontSize:16,lineHeight:20}}>{`- ${ingredient.quantity} ${ingredient.name}`}</Text>

                       </View>
                   )
               })}
           </Card>

           </View>



           <View style={{margin:20}}>
           <Text style={{fontSize:18 ,marginBottom:10}}>Step by step guidelines</Text>
           <Card customStyle={{padding:20}}>
               {steps.map((step,index)=>{
                   return(
                       <View key={step}>
                       <Text style={{fontSize:16,lineHeight:20}}>
                       {`- ${step}`}</Text>

                       </View>
                   )
               })}
           </Card>

           </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({})
