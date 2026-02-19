import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 64,
  },

  loaderContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  loaderText: {
    color: "#777",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
  },

  headerBlock: {
    marginBottom: 24,
  },
  headerEyebrow: {
    fontSize: 11,
    letterSpacing: 2,
    color: "#58CC02",
    textTransform: "uppercase",
    fontWeight: "800",
    marginBottom: 4,
  },
  header: {
    fontSize: 34,
    fontWeight: "900",
    color: "#1C1C1E",
    lineHeight: 40,
    letterSpacing: -0.5,
  },

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  searchIcon: {
    fontSize: 18,
    color: "#AFAFAF",
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: "#1C1C1E",
    fontSize: 15,
    fontWeight: "500",
  },

  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  countText: {
    color: "#AFAFAF",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  goToSavedJobsText: {
    color: "#58CC02",
    fontSize: 14,
    fontWeight: "800",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 14,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    shadowColor: "#1C1C1E",
    shadowOpacity: 0.08,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  cardAccent: {
    height: 6,
    backgroundColor: "#58CC02",
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1C1C1E",
    letterSpacing: -0.2,
  },
  company: {
    fontSize: 13,
    color: "#AFAFAF",
    fontWeight: "600",
    marginTop: 3,
  },

  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "#F0FBE6",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: "#C3EFAA",
  },
  tagDark: {
    backgroundColor: "#58CC02",
    borderColor: "#46A302",
  },
  tagText: {
    fontSize: 11,
    color: "#3D8C00",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  tagTextDark: {
    color: "#FFFFFF",
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salary: {
    fontSize: 14,
    color: "#1C1C1E",
    fontWeight: "700",
  },

  saveButton: {
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 18,
    shadowColor: "#1C1C1E",
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    backgroundColor: "#FFFFFF",
  },
  saveButtonActive: {
    backgroundColor: "#58CC02",
    borderColor: "#46A302",
  },
  saveButtonText: {
    color: "#AFAFAF",
    fontSize: 13,
    fontWeight: "800",
  },
  saveButtonTextActive: {
    color: "#FFFFFF",
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#AFAFAF",
    textAlign: "center",
    fontWeight: "500",
  },
});
