import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainLanding from '../MainLanding';
import ContentLanding from '../ContentLanding';
import Chatting from '../Chatting';
import MyProfile from '../MyProfile';

const Tab = createBottomTabNavigator();

function Tabs({_navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Main" component={MainLanding} />
      <Tab.Screen name="Content" component={ContentLanding} />
      <Tab.Screen name="Chatting" component={Chatting} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
}

export default Tabs;
