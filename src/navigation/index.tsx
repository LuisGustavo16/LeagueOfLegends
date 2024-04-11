import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {MenuDrawer} from "./MenuStack.navigation"

export default function Navigation () {
    return (
        <NavigationContainer>
            <MenuDrawer/>
        </NavigationContainer>
    )
}