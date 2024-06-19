import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Login from './components/login';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Mujflatlist from './components/flatlist';
import Touche from './components/nebavimeto';




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>
      
      Please Login
      </Text>
      <Login></Login>
    </View>
  );
}

function ScamScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Touche></Touche>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Mujflatlist></Mujflatlist>
    </View>
  );
}

function MyTabs() {


}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen" >
        <Tab.Screen name="Home" component={HomeScreen}/> 
        <Tab.Screen name="Scam" component={ScamScreen}/> 
        <Tab.Screen name="Settings" component={SettingsScreen}/>       
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    paddingBottom: 20,
  }

  
});