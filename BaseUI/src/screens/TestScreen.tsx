/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('Text');
  const [textInput, setTextInput] = useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'grey',
        // borderColor: 'red',
        // borderWidth: 1,
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderColor: 'yellow',
          borderWidth: 1,
          paddingBottom: 12,
        }}>
        <Text style={{color: 'white', fontSize: 22}}>Test Title</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{
          //flex: 4,
          height: '80%',
          borderColor: 'red',
          borderWidth: 1,
        }}>
        <View
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            flex: 1,
            margin: 10,
          }}>
          <Text style={{color: 'white'}}>{text}</Text>
          <TextInput
            style={{
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 5,
              padding: 5,
            }}
            placeholder="Type something here..."
            placeholderTextColor={'white'}
            onChangeText={setTextInput}
          />
        </View>
        {/* <View
          //behavior="padding"
          style={{
            borderColor: 'pink',
            borderWidth: 1,
            justifyContent: 'flex-end',
            flex: 1,
            margin: 10,
          }}></View> */}
        <Button title="Save" onPress={() => setText(textInput)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MyComponent;
