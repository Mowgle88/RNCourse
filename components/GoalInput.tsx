import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Modal, Image } from 'react-native'

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
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder='Your course goal'
          placeholderTextColor={'rgb(33, 150, 243)'}
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
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
    color: 'white',
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