import { ApiJob, Job } from "@/types/jobs";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";

export default function JobFinderScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "https://empllo.com/api/v1";

  const transformJobs = (apiJobs: ApiJob[]): Job[] => {
    return apiJobs.map((job) => ({
      ...job,
      id: uuid.v4().toString(),
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

  const renderItem = ({ item }: { item: Job }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.company}>{item.companyName}</Text>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>{item.jobType}</Text>
        <Text style={styles.metaText}>{item.workModel}</Text>
        <Text style={styles.metaText}>{item.seniorityLevel}</Text>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.salary}>
          {item.minSalary && item.maxSalary
            ? `${item.currency} ${item.minSalary} - ${item.maxSalary}`
            : "Salary not specified"}
        </Text>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>
            {item.isSaved ? "Saved" : "Save"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Fetching jobs...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Your Next Job</Text>

      <TextInput
        placeholder="Search jobs..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <Text style={styles.countText}>{filteredJobs.length} jobs found</Text>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
