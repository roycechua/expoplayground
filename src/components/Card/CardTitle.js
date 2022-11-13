import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardTitle = (props) => {
	return (
		<View style={{ marginBottom: 10 }}>
			<Text style={{ fontWeight: 'bold', fontSize: 22 }}>{props.title}</Text>
		</View>
	);
};

export default CardTitle;

const styles = StyleSheet.create({});
