import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'

interface GoalInputProps {
  onAddGoal: (arg: string) => void
}

export default function GoalInput(props: GoalInputProps) {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enterText: string) {
    setEnteredGoalText(enterText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        style={styles.textInput}
        placeholder='Your course goal'
        onChangeText={goalInputHandler}
      />
      <Button
        title='Add Goal'
        onPress={addGoalHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});