import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={60}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Explain your experience here');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        position:'absolute',
        top:290,
        left:600,
        borderColor:'rgba(46, 170, 224, 1)',
        borderWidth:1,
         borderRadius:5,
         width:330,
         height:170,
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        color:'white'

         }}>
      <UselessTextInput
        multiline
        numberOfLines={10}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{
            color:'rgba(255, 255, 255, 0.4)',
            marginTop:-60,
            fontSize:10,
            padding:15,
            
        }}
      />
    </View>
  );
}

export default UselessTextInputMultiline;