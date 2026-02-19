import { useSavedJobsStore } from "@/store/useSavedJobsStore";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./saved-jobs-screen.style";

export default function SavedJobsScreen() {
  const navigation = useNavigation();
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);
  const removeJob = useSavedJobsStore((state) => state.removeJob);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.company}>{item.companyName}</Text>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>{item.jobType}</Text>
        <Text style={styles.metaText}>{item.workModel}</Text>
      </View>

      <View style={styles.footerRow}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeJob(item.id)}
        >
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (savedJobs.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No Saved Jobs Yet</Text>
        <Text style={styles.emptySubtitle}>
          Start saving jobs from the Job Finder screen.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Jobs</Text>

      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
