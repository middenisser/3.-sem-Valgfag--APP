import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CreateRoutePage() {
  const [routeName, setRouteName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = [
    'Svær at løbe',
    'Nem at løbe',
    'hunde venlig',
    'Stop til børn',
    'Skov',
    'By',
    'holde pauser',
    'kunst/kultur'
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Opret din rute</Text>

      <Text style={styles.label}>Navn på ruten</Text>
      <TextInput
        style={styles.input}
        placeholder="Navn på ruten"
        value={routeName}
        onChangeText={setRouteName}
      />

      <Text style={styles.label}>Beskrivelse</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Beskrivelse"
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
      />

      <Text style={styles.label}>Tags til ruten</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tag,
              selectedTags.includes(tag) && styles.selectedTag,
            ]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Billede til ruten?</Text>
      <TouchableOpacity style={styles.photoButton}>
        <Text style={styles.photoButtonText}>Tag billede</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Klar til at ligge ud?</Text>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Gem</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#c2d3cc',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f7a8c',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#1f7a8c',
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 100,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  tag: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    margin: 5,
    minWidth: '45%',
    alignItems: 'center',
  },
  selectedTag: {
    backgroundColor: '#1f7a8c',
  },
  tagText: {
    color: '#000',
  },
  photoButton: {
    backgroundColor: '#405d27',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#405d27',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
