import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Modal } from 'react-native'

interface GoalInputProps {
  onAddGoal: (arg: string) => void,
  onCancel: () => void,
  visible: boolean
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

  function cancellHandler() {
    props.onCancel();
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='fade'>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={cancellHandler}
            />
          </View>
        </View>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});