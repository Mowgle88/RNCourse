import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItemFlatList from './components/GoalItemFlatList';
// import GoalItemScrollView from './components/GoalItemScrollView';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<{ text: string, id: string }[]>([]);

  function changeModalIsVisible() {
    setModalIsVisible((currentModalIsVisible) => !currentModalIsVisible)
  }

  function addGoalHandler(enteredGoalText: string) {
    if (enteredGoalText.trim()) {
      setCourseGoals(currentCourseGoals => [
        ...currentCourseGoals,
        { text: enteredGoalText.trim(), id: Date.now().toString() }]);
      setModalIsVisible(false);
    }
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#b180f0' onPress={changeModalIsVisible} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={changeModalIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItemFlatList
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
          {/* <GoalItemScrollView courseGoals={courseGoals} /> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});
