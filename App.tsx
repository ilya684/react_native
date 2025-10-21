import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([
    'Купити хліб',
    'Написати код',
    'Почитати книгу'
  ]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Мої завдання</Text>

      <TextInput
        placeholder="Нове завдання"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          padding: 8
        }}
      />

      <ScrollView>
        {tasks.map((task, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10
            }}
          >
            <Text style={{ flex: 1 }}>{task}</Text>
            <Button title="Виконано" onPress={() => {}} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}