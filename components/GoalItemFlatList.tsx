import React from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

interface GoalItemFlatListProps {
  text: string,
  id: string,
  onDeleteItem: (id: string) => void
}

export default function GoalItemFlatList(this: HTMLElement, props: GoalItemFlatListProps) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
        {/* <Button
        title='Delete'
        onPress={props.onDeleteItem.bind(this, props.id)}
      /> */}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    flexDirection: 'row',
    alignItems: 'center'
  },
  goalText: {
    padding: 8,
    color: 'white',
    flex: 1
  }
});
