import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function ContentLanding({navigation}) {
  return (
    <View style={styles.container}>
      <Text> 컨텐츠(강의) 페이지 </Text>
      <Button
        title="메인 페이지로"
        onPress={() => navigation.navigate('MainLanding')}
      />
    </View>
  );
}

export default ContentLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
