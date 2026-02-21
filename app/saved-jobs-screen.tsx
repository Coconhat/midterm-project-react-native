import { useSavedJobsStore } from "@/store/useSavedJobsStore";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./saved-jobs-screen.style";

export default function SavedJobsScreen() {
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);
  const removeJob = useSavedJobsStore((state) => state.removeJob);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Green top accent bar — Duolingo tile feel */}
      <View style={styles.cardAccent} />

      <View style={styles.cardContent}>
        {/* Header */}
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.company}>{item.companyName}</Text>
        </View>

        {/* Meta tags */}
        <View style={styles.metaRow}>
          {item.jobType && (
            <View style={styles.tag}>
              <Text style={styles.tagText}>{item.jobType}</Text>
            </View>
          )}
          {item.workModel && (
            <View style={styles.tag}>
              <Text style={styles.tagText}>{item.workModel}</Text>
            </View>
          )}
          {item.seniorityLevel && (
            <View style={[styles.tag, styles.tagGreen]}>
              <Text style={[styles.tagText, styles.tagTextGreen]}>
                {item.seniorityLevel}
              </Text>
            </View>
          )}
        </View>

        {/* Salary */}
        <Text style={styles.salary}>
          {item.minSalary && item.maxSalary
            ? `${item.currency} ${item.minSalary}–${item.maxSalary}`
            : "Salary not listed"}
        </Text>

        {/* Action buttons */}
        <View style={styles.footerRow}>
          <Pressable
            style={styles.applyButton}
            onPress={() =>
              router.push({
                pathname: "/application-form-screen",
                params: { jobId: item.id, from: "saved" },
              })
            }
          >
            <Text style={styles.applyText}>✦ Apply Now</Text>
          </Pressable>

          <Pressable
            style={styles.removeButton}
            onPress={() => removeJob(item.id)}
          >
            <Text style={styles.removeText}>Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  if (savedJobs.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>🔖</Text>
        <Text style={styles.emptyTitle}>No saved jobs yet!</Text>
        <Text style={styles.emptySubtitle}>
          Tap "Save" on any job in the Job Finder to keep track of it here.
        </Text>
        <Pressable
          style={styles.browseButton}
          onPress={() => {
            router.dismissAll();
            router.replace("/");
          }}
        >
          <Text style={styles.browseButtonText}>Browse Jobs</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBlock}>
        <Text style={styles.headerEyebrow}>YOUR LIST</Text>
        <Text style={styles.header}>Saved Jobs</Text>
        <View style={styles.countBadge}>
          <Text style={styles.countBadgeText}>
            {savedJobs.length} {savedJobs.length === 1 ? "job" : "jobs"} saved
          </Text>
        </View>
      </View>

      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
}
