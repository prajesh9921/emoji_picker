import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Button, FlatList, TouchableOpacity, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import api from "./api";

export default function App() {

  const [text, onChangeText] = useState('');
  // const [result, setResult] = useState([]);
  const [selectedVal, setSelectedVal] = useState("1F4BB");
  const [result, SearchEmoji] = api();

  const Search = () => {
    SearchEmoji(text);
  };


  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
            value={text}
            onChangeText={(val) => {onChangeText(val)}}
            style={styles.input}
            placeholder= "Search emoji"
            placeholderTextColor="white"
          />
        <Pressable style={styles.button} onPress={Search()}>
          <Text style={styles.text}>Search</Text>
        </Pressable>
      </View>
      <View style={styles.emoji_picker}>
        <FlatList
          data={result}
          keyExtractor={(key) => key.unicodeName}
          numColumns={6}
          renderItem={({item}) => {
            const codepoint = item.codePoint;
            const arr = codepoint.split(" ");
            const final = arr[0]; 
            return (
              <>
                <TouchableOpacity onPress={() => setSelectedVal(final)}>
                  <Text style={styles.emoji_text}>{String.fromCodePoint("0x"+final)}</Text>
                </TouchableOpacity>
              </>
            );
          }}

        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.component}>
        <Text style={styles.display_emoji}>{String.fromCodePoint("0x"+selectedVal)}</Text>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191642',
    padding: 10,
    marginTop: 50
  },
  component:{
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji_picker:{
    flex: 1,
    backgroundColor: "#302C66",
    borderRadius: 10,
    marginBottom: 10,
  },
  input:{
    flex: 1,
    height: 50,
    backgroundColor: "#302C66",
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  emoji_text:{
    margin: 11,
    fontSize: 28
  },
  search:{
    flexDirection: 'row'
  },
  button:{
    height: 50,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#2196F3',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  display_emoji:{
    fontSize: 100,
  }
});
