import React, {useState} from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'milk' },
    { id: uuidv4(), text: 'bread' },
    { id: uuidv4(), text: 'cereal' },
    { id: uuidv4(), text: 'chocolate' },
  ]);

  const deleteItem = (deleteId) => {
     setItems(prevItems => { 
        return items.filter(item => item.id !== deleteId);       
     }) 
  } 

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', { text: 'OK'});
    } else{ 
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });  
    }
  }
  return(    
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
       <FlatList
          data={items}   
          renderItem={({item}) =>
            <ListItem item={item} deleteItem={deleteItem}/>
          }    
       />
 
      {
      // Image  
      /* <Image 
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} 
        style={styles.img}
      /> */
      }
    </View>    
  )
};
 
const styles = StyleSheet.create({
  container: {
    flex:1, 
    paddingTop: 60    
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: 'darkslateblue',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2
  }

});



export default App; 