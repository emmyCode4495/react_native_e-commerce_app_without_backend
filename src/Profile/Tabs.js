import { useWindowDimensions, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {SceneMap,TabView,TabBar} from 'react-native-tab-view'
import {View, Text} from 'native-base'
import Orders from './Orders'
import Profiles from './Profile'
import colors from '../data/colors'

const renderScene = SceneMap({
    first:Profiles,
    second:Orders
})
export default function Tabs() {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key:"first", 
            title:"PROFILE"
        },
        {
            key:"second",
             title:"ORDERS"
        },
    ]);

    const renderTabsBar = (props) =>(
        <TabBar 
        {...props} 
        tabStyle={styles.tabStyle} 
        indicatorStyle={{
            backgroundColor:colors.black
        }}
        activeColor={colors.main}
        inactiveColor={colors.white}
        renderLabel={({route,color})=>(
            <Text style={{color,...styles.text}}>{route.title}</Text>
            )}
        />
    );
    
  return (
    <TabView 
        navigationState={{index,routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabsBar}
    />
  )
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:"black"
    },
    text:{
        fontSize:13,
        fontWeight:'bold'
    }
})