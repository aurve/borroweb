import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaSafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Earnings({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}} showsVerticalScrollIndicator={false} indicatorStyle="white">
      <View style={styles.content}>
      <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          tortor a sem consectetur venenatis. Nulla iaculis, odio nec pretium
          lobortis, sapien urna commodo odio, eget volutpat ligula risus sed
          libero. Proin ultricies blandit nisl, non rutrum erat rutrum vitae.
          Sed tempus velit vitae ex scelerisque, sit amet mattis nulla
          vestibulum. Sed at metus sed elit sollicitudin iaculis. Suspendisse
          vel orci finibus, sollicitudin velit et, pellentesque sapien.
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 24,
  },
  content: {
    flex: 1,
  },
});
