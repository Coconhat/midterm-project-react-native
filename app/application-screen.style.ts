import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // ─── Layout ──────────────────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 60,
  },

  // ─── Back button ──────────────────────────────────────────────────────────
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    color: "#58CC02",
    fontWeight: "800",
    fontSize: 15,
  },

  // ─── Header ──────────────────────────────────────────────────────────────
  headerBlock: {
    marginBottom: 28,
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
    fontSize: 32,
    fontWeight: "900",
    color: "#1C1C1E",
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  headerSub: {
    fontSize: 14,
    color: "#AFAFAF",
    fontWeight: "500",
    lineHeight: 20,
  },

  // ─── Field groups ─────────────────────────────────────────────────────────
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "800",
    color: "#1C1C1E",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  required: {
    color: "#FF4B4B",
  },
  input: {
    backgroundColor: "#F7F7F7",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1C1C1E",
    fontWeight: "500",
  },
  textarea: {
    height: 140,
    paddingTop: 14,
  },
  inputError: {
    borderColor: "#FF4B4B",
    backgroundColor: "#FFF5F5",
  },
  errorText: {
    color: "#FF4B4B",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 6,
  },

  // ─── Char counter row ─────────────────────────────────────────────────────
  charRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  charCount: {
    fontSize: 12,
    color: "#AFAFAF",
    fontWeight: "600",
    marginLeft: "auto",
  },
  charCountOver: {
    color: "#FF4B4B",
    fontWeight: "800",
  },

  // ─── Submit button ────────────────────────────────────────────────────────
  submitButton: {
    backgroundColor: "#58CC02",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    // Duolingo raised effect
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
    shadowColor: "#3D8C00",
    shadowOpacity: 0.3,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  footerNote: {
    fontSize: 11,
    color: "#CFCFCF",
    textAlign: "center",
    fontWeight: "500",
  },

  // ─── Success Modal ────────────────────────────────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  modalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 32,
    alignItems: "center",
    width: "100%",
    // Top green accent bar via borderTop
    borderTopWidth: 6,
    borderTopColor: "#58CC02",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  modalEmoji: {
    fontSize: 52,
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#1C1C1E",
    marginBottom: 10,
    textAlign: "center",
  },
  modalBody: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "500",
    marginBottom: 24,
  },
  modalButton: {
    backgroundColor: "#58CC02",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderBottomWidth: 4,
    borderBottomColor: "#46A302",
    shadowColor: "#3D8C00",
    shadowOpacity: 0.3,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    marginBottom: 12,
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },
  modalRedirectNote: {
    fontSize: 12,
    color: "#AFAFAF",
    fontWeight: "600",
  },
});
