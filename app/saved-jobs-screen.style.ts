import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // ─── Layout ──────────────────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 64,
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
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  countBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#F0FBE6",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: "#C3EFAA",
  },
  countBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#3D8C00",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  // ─── Card ────────────────────────────────────────────────────────────────
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

  // ─── Footer buttons ───────────────────────────────────────────────────────
  footerRow: {
    flexDirection: "row",
    gap: 10,
  },
  applyButton: {
    flex: 1,
    backgroundColor: "#58CC02",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    // Duolingo raised effect
    shadowColor: "#3D8C00",
    shadowOpacity: 0.4,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
  },
  applyText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.3,
  },
  removeButton: {
    borderWidth: 2,
    borderColor: "#FFD6D6",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    backgroundColor: "#FFF5F5",
    borderBottomWidth: 4,
    borderBottomColor: "#FFBCBC",
  },
  removeText: {
    color: "#E53935",
    fontWeight: "800",
    fontSize: 14,
  },

  // ─── Empty state ──────────────────────────────────────────────────────────
  emptyContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#1C1C1E",
    marginBottom: 8,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#AFAFAF",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 28,
  },
  browseButton: {
    backgroundColor: "#58CC02",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 32,
    shadowColor: "#3D8C00",
    shadowOpacity: 0.4,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
  },
  browseButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 0.3,
  },
});
