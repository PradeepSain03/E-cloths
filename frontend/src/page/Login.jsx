import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Tabs} from 'expo-router'; 


import { Ionicons } from '@expo/vector-icons';



function Navigation() {


  return (
    <Tabs initialTab="index" barStyle={styles.tabBar}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"

        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps-outline" size={size} color={color} />
          )
         
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}



const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0D47A1', 
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedTabButton: {
    borderRadius: 20, 
  },
});

export default Navigation;
