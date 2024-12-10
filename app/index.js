import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Link href='/profile' asChild>
      <Pressable>
        <Text>Profile Page</Text>
      </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
