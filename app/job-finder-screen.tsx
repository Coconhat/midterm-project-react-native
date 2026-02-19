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
import { styles } from "./job-finder-screen.style";

export default function JobFinderScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const toggleSaveJob = useSavedJobsStore((state) => state.toggleSaveJob);
  const savedJobs = useSavedJobsStore((state) => state.savedJobs);

  const isJobSaved = (id: string) => savedJobs.some((job) => job.id === id);

  const API_URL = "https://empllo.com/api/v1";

  // BUG FIX: Use a stable ID derived from job data instead of uuid.v4()
  // uuid.v4() generates a NEW random ID on every render/fetch, so saved IDs
  // never match the re-generated IDs. Use a deterministic key instead.
  const transformJobs = (apiJobs: ApiJob[]): Job[] => {
    return apiJobs.map((job, index) => ({
      ...job,
      // Use API-provided id if available, otherwise fall back to a stable composite key
      id:
        job.id ??
        `${job.companyName}-${job.title}-${index}`
          .replace(/\s+/g, "-")
          .toLowerCase(),
      isSaved: false,
    }));
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const formattedJobs = transformJobs(data.jobs);
        setJobs(formattedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, jobs]);

  const renderItem = ({ item }: { item: Job }) => {
    const saved = isJobSaved(item.id);
    return (
      <View style={styles.card}>
        <View style={styles.cardAccent} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.company}>{item.companyName}</Text>
          </View>

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
              <View style={[styles.tag, styles.tagDark]}>
                <Text style={[styles.tagText, styles.tagTextDark]}>
                  {item.seniorityLevel}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.salary}>
              {item.minSalary && item.maxSalary
                ? `${item.currency} ${item.minSalary}–${item.maxSalary}`
                : "Salary not listed"}
            </Text>

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
        <ActivityIndicator size="large" color="#E8FF47" />
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

      {/* Search */}
      <View style={styles.searchWrapper}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          placeholder="Search by title..."
          placeholderTextColor="#666"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Nav row */}
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
