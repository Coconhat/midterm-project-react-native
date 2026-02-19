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
    marginBottom: 20,
    color: "#111827",
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
  headerRow: {
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
    gap: 8,
    marginBottom: 14,
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
  },
  applyButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  applyText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  removeButton: {
    backgroundColor: "#FEE2E2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  removeText: {
    color: "#DC2626",
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
