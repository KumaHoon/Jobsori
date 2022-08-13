import React from 'react';
import {View, Text, Button} from 'react-native';

function Chatting({navigation}) {
  return (
    <View>
      <Text> 채팅 페이지임. </Text>
      <Button
        title="메인 페이지로"
        onPress={() => navigation.navigate('MainLanding')}
      />
    </View>
  );
}

export default Chatting;
