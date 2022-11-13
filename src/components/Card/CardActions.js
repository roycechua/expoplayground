import { StyleSheet, View } from 'react-native';
import React from 'react';

const CardActions = (props) => {
	return (
		<View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
			{props.children}
		</View>
	);
};

export default CardActions;

const styles = StyleSheet.create({});
