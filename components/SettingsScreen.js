import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const SettingsPage = () => {
  const [kidsContent, setKidsContent] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text>Kids Content</Text>
        <Switch value={kidsContent} onValueChange={setKidsContent} />
      </View>
      <Button title="Save" onPress={() => alert(`Saved: Kids Content = ${kidsContent}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
});

export default SettingsPage;