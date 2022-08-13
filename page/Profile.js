import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text> 프로필 페이지임.</Text>
      <Button
        title="메인 화면으로"
        onPress={() => navigation.navigate('MainLanding')}
      />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
