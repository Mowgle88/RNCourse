import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItemFlatList from './components/GoalItemFlatList';
// import GoalItemScrollView from './components/GoalItemScrollView';

export default function App() {

  const [courseGoals, setCourseGoals] = useState<{ text: string, id: string }[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Date.now().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItemFlatList text={itemData.item.text} />
            );
          }}
        />
        {/* <GoalItemScrollView courseGoals={courseGoals} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
