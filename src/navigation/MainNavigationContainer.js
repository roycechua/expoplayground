import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import HeaderLeft from '../components/HeaderLeft';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const MainNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    // headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#ffffff'
                    },
                    headerLeft: (props) => {
                        if(props.canGoBack) {
                            return <HeaderLeft {...props} />
                        } 
                    }
                }}
            >
                <Stack.Screen 
                    name='Home' 
                    component={HomeScreen} 
                    options={{
                        title: 'Dashboard',
                    }} 
                />
                <Stack.Screen 
                    name='Profile' 
                    component={ProfileScreen}
                    options={{
                        title: 'Your Account'
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigationContainer;