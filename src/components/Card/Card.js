import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardActions from './CardActions';

const Card = (props) => {
	return <View style={styles.cardContainer}>{props.children}</View>;
};

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Actions = CardActions;

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: "stretch"
    }
});
