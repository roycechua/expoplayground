import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardBody = (props) => {
	return <View style={{backgroundColor: "#F4EDF9", padding: 10, marginBottom: 10 }}>{props.children}</View>;
};

export default CardBody;

const styles = StyleSheet.create({});
