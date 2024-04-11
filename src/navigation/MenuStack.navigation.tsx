import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import { Slide1 } from '../screens/Slide_1';
import { Slide2 } from '../screens/Slide_2';
import { Slide3 } from '../screens/Slide_3';
import { Slide4 } from '../screens/Slide_4';
import React from 'react';

type MenuDrawerParam = {
    Garen: undefined;
    Ashe: undefined;
    Jinx: undefined;
    Draven: undefined;
}

type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Garen">

export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuDrawer () {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 250,
            },
          }}
        >
            <Drawer.Screen name='Garen' component={Slide1}/>
            <Drawer.Screen name='Ashe' component={Slide2}/>
            <Drawer.Screen name='Jinx' component={Slide3}/>
            <Drawer.Screen name='Draven' component={Slide4}/>
        </Drawer.Navigator>
    )
}