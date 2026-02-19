import { useSavedJobsStore } from "@/store/useSavedJobsStore";
import { ApiJob, Job } from "@/types/jobs";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { styles } from "./job-finder-screen.style";

export default function JobFinderScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const toggleSaveJob = useSavedJobsStore((state) => state.toggleSaveJob);
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);

  const isJobSaved = (id: string) => savedJobs.some((job) => job.id === id);

  const API_URL = "https://empllo.com/api/v1";

  // IDs are assigned once at fetch time and stored in state — they remain
  // stable for the session so savedJobs IDs will always match correctly.
  const transformJobs = (apiJobs: ApiJob[]): Job[] =>
    apiJobs.map((job) => ({
      ...job,
      id: uuid.v4().toString(),
      isSaved: false,
    }));

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setJobs(transformJobs(data.jobs));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, jobs],
  );

  const renderItem = ({ item }: { item: Job }) => {
    const saved = isJobSaved(item.id);
    return (
      <View style={styles.card}>
        {/* Duolingo-style top accent stripe */}
        <View style={styles.cardAccent} />

        <View style={styles.cardContent}>
          {/* Job title + company */}
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.company}>{item.companyName}</Text>
          </View>

          {/* Type / model / seniority tags */}
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

          {/* Action row: Apply (primary) + Save (secondary) */}
          <View style={styles.actionRow}>
            <Pressable
              style={styles.applyButton}
              onPress={() =>
                router.push({
                  pathname: "/application-form-screen",
                  params: { jobId: item.id, from: "finder" },
                })
              }
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </Pressable>

            <Pressable
              style={[styles.saveButton, saved && styles.saveButtonActive]}
              onPress={() => toggleSaveJob(item)}
            >
              <Text
                style={[
                  styles.saveButtonText,
                  saved && styles.saveButtonTextActive,
                ]}
              >
                {saved ? "✓ Saved" : "Save"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#58CC02" />
        <Text style={styles.loaderText}>Finding opportunities...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBlock}>
        <Text style={styles.headerEyebrow}>JOBS FOR YOU</Text>
        <Text style={styles.header}>Find Your{"\n"}Next Role.</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchWrapper}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          placeholder="Search by title..."
          placeholderTextColor="#AFAFAF"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Count + nav */}
      <View style={styles.navRow}>
        <Text style={styles.countText}>{filteredJobs.length} listings</Text>
        <Pressable onPress={() => router.push("/saved-jobs-screen")}>
          <Text style={styles.goToSavedJobsText}>Saved jobs →</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
}
