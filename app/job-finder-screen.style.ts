import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111827",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
    fontSize: 16,
  },
  countText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  company: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  metaText: {
    fontSize: 12,
    backgroundColor: "#EEF2FF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: "#4F46E5",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salary: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111827",
  },
  saveButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
