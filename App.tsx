import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

useEffect(() => {const checkToken = async () => {const savedToken = await AsyncStorage.getItem('token');if (savedToken) {setToken(savedToken);}
    };
    checkToken();
  }, []);

  const login = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

if (data.token) {
   await AsyncStorage.setItem('token', data.token);
        setToken(data.token);
} else {
   alert('Помилка входу');
      }
} catch (error) {
      alert('Помилка мережі');
    }
  };

if (token) {
    return (
  <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 24 }}>Ви авторизовані ✅</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Вхід</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

 <TextInput placeholder="Пароль"value={password} onChangeText={setPassword}secureTextEntry style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

      <Button title="Увійти" onPress={login} />
    </View>
  );
}