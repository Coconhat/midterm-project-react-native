import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // ─── Layout ──────────────────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 64,
  },

  // ─── Loader ──────────────────────────────────────────────────────────────
  loaderContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  loaderText: {
    color: "#AFAFAF",
    fontSize: 14,
    fontWeight: "600",
  },

  // ─── Header ──────────────────────────────────────────────────────────────
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

  // ─── Search ──────────────────────────────────────────────────────────────
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
    fontSize: 20,
    color: "#AFAFAF",
    marginRight: 8,
    lineHeight: 26,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: "#1C1C1E",
    fontSize: 15,
    fontWeight: "500",
  },

  // ─── Nav row ─────────────────────────────────────────────────────────────
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

  // ─── Card ────────────────────────────────────────────────────────────────
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 14,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    // Duolingo "raised tile" shadow
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

  // ─── Tags ────────────────────────────────────────────────────────────────
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
  },
  tagGreen: {
    backgroundColor: "#F0FBE6",
    borderColor: "#C3EFAA",
  },
  tagText: {
    fontSize: 11,
    color: "#888",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  tagTextGreen: {
    color: "#3D8C00",
  },

  // ─── Salary ──────────────────────────────────────────────────────────────
  salary: {
    fontSize: 13,
    color: "#1C1C1E",
    fontWeight: "700",
    marginBottom: 16,
  },

  // ─── Action row (Apply + Save) ────────────────────────────────────────────
  actionRow: {
    flexDirection: "row",
    gap: 10,
  },

  // Apply — primary green, full Duolingo raised button
  applyButton: {
    flex: 1,
    backgroundColor: "#58CC02",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    shadowColor: "#3D8C00",
    shadowOpacity: 0.35,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.3,
  },

  // Save — ghost outline, fills green when saved
  saveButton: {
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 4,
    borderBottomColor: "#E0E0E0",
  },
  saveButtonActive: {
    backgroundColor: "#F0FBE6",
    borderColor: "#C3EFAA",
    borderBottomColor: "#A8E07A",
  },
  saveButtonText: {
    color: "#AFAFAF",
    fontSize: 13,
    fontWeight: "800",
  },
  saveButtonTextActive: {
    color: "#3D8C00",
  },

  // ─── Empty state ──────────────────────────────────────────────────────────
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
