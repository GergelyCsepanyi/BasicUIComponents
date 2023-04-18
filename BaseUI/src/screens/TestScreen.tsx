/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleProp, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  Keyboard,
} from 'react-native';

interface FilledButtonProps {
  text: string;
  touchableOppacityStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  onPress: () => any;
}

const FilledButton: React.FC<FilledButtonProps> = ({
  text,
  touchableOppacityStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={touchableOppacityStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const MyComponent = () => {
  const [text, setText] = useState('Text');
  const [textInput, setTextInput] = useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'grey',
        // borderColor: 'red',
        // borderWidth: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
      }}>
      {/* <View
      style={{
        backgroundColor: 'grey',
        // borderColor: 'red',
        // borderWidth: 1,
        //paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
      }}> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderColor: 'yellow',
          //backgroundColor: 'grey',
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
          backgroundColor: 'white',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}>
        <View
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            flex: 1,
            margin: 10,
          }}>
          <Text style={{color: 'black'}}>{text}</Text>
          <TextInput
            style={{
              borderColor: 'black',
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
          style={{
            marginBottom: 5,
            //alignItems: 'center',
            width: '100%',
          }}> */}
        <FilledButton
          touchableOppacityStyle={{
            backgroundColor: 'blue',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            width: '90%',
            height: 45,
            borderRadius: 20,
            marginBottom: 10,
          }}
          textStyle={{
            fontSize: 18,
            color: 'white',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          text="Save"
          onPress={() => {
            setText(textInput);
            Keyboard.dismiss();
          }}
        />
        {/* </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
    // </View>
  );
};

export default MyComponent;
