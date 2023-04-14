import React, {useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: 'rgb(220, 218, 229)',
        borderColor: 'blue',
        borderWidth: 5,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}>
      <SafeAreaView
        style={{flex: 1, height: '100%', borderColor: 'red', borderWidth: 5}}>
        <TextInput
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderWidth: 5,
            borderColor: 'green',
            color: 'magenta',
          }}
          value={text}
          onChangeText={setText}
          placeholder="Text..."
          placeholderTextColor="black"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            borderColor: 'orange',
            borderWidth: 5,
          }}>
          <View
            style={{
              height: 100,
              backgroundColor: 'red',
              borderColor: 'yellow',
              borderWidth: 5,
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default MyComponent;
