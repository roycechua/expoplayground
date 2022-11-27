import { Button, Text, View } from 'react-native';

const ProfileScreen = (props) => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>ProfileScreen</Text>
			<Button
				title='Go Back'
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

export default ProfileScreen;
