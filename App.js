import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card/Card';
import Constants from 'expo-constants';

export default function App() {
  const dummy = [1,2,3]
	return (
		<SafeAreaView style={styles.container}>
      {dummy.map(num => <Card>
				<Card.Title title={`Title ${num}`} />
				<Card.Body>
					<Text>Some Content here</Text>
				</Card.Body>
				<Card.Actions>
					<Button title='Ok' />
          <View style={{margin: 10}} />
					<Button title='Cancel' />
				</Card.Actions>
			</Card>)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
	},
});
