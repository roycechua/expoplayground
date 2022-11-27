import { Button, Text, View } from 'react-native';

const HomeScreen = (props) => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>HomeScreen</Text>
			<Button
				title='Go to Profile Screen'
				onPress={() => {
					props.navigation.navigate('Profile');
				}}
			/>
		</View>
	);
};

export default HomeScreen;
