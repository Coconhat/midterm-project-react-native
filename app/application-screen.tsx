import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { z } from "zod";
import { styles } from "./application-screen.style";

const applicationSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required.")
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be 100 characters or less.")
    .regex(/^[a-zA-Z\s\-']+$/, "Name must contain letters only."),

  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),

  contactNumber: z
    .string()
    .min(1, "Contact number is required.")
    .regex(
      /^[0-9+\-\s()]{7,15}$/,
      "Enter a valid contact number (7–15 digits).",
    ),

  whyHireYou: z
    .string()
    .min(1, "Please tell us why we should hire you.")
    .min(30, "Please write at least 30 characters.")
    .max(1000, "Maximum 1000 characters allowed."),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export default function ApplicationFormScreen() {
  const { from } = useLocalSearchParams<{ from: string }>();
  const fromSaved = from === "saved";

  const [showSuccess, setShowSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      whyHireYou: "",
    },
    mode: "onTouched",
  });

  const whyHireYouValue = watch("whyHireYou");
  const charCount = whyHireYouValue?.length ?? 0;
  const charOver = charCount > 1000;

  const onSubmit = (_data: ApplicationFormValues) => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    reset();
    if (fromSaved) {
      router.replace("/");
    } else {
      router.back();
    }
  };

  const handleBack = () => {
    if (isDirty) {
      Alert.alert(
        "Discard changes?",
        "You have unsaved changes. Are you sure you want to go back?",
        [
          { text: "Stay", style: "cancel" },
          {
            text: "Discard",
            style: "destructive",
            onPress: () => router.back(),
          },
        ],
      );
    } else {
      router.back();
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Back */}
        <Pressable onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        {/* Header */}
        <View style={styles.headerBlock}>
          <Text style={styles.headerEyebrow}>JOB APPLICATION</Text>
          <Text style={styles.header}>Apply Now 🌟</Text>
          <Text style={styles.headerSub}>
            Fill in your details below and we'll get back to you.
          </Text>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>
            Full Name <Text style={styles.required}>*</Text>
          </Text>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.name ? styles.inputError : null]}
                placeholder="e.g. Juan dela Cruz"
                placeholderTextColor="#AFAFAF"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="words"
                returnKeyType="next"
              />
            )}
          />
          {errors.name && (
            <Text style={styles.errorText}>⚠ {errors.name.message}</Text>
          )}
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>
            Email Address <Text style={styles.required}>*</Text>
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.email ? styles.inputError : null]}
                placeholder="e.g. juan@email.com"
                placeholderTextColor="#AFAFAF"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>⚠ {errors.email.message}</Text>
          )}
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>
            Contact Number <Text style={styles.required}>*</Text>
          </Text>
          <Controller
            control={control}
            name="contactNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  errors.contactNumber ? styles.inputError : null,
                ]}
                placeholder="e.g. 09171234567"
                placeholderTextColor="#AFAFAF"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="phone-pad"
                returnKeyType="next"
              />
            )}
          />
          {errors.contactNumber && (
            <Text style={styles.errorText}>
              ⚠ {errors.contactNumber.message}
            </Text>
          )}
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>
            Why should we hire you? <Text style={styles.required}>*</Text>
          </Text>
          <Controller
            control={control}
            name="whyHireYou"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  styles.textarea,
                  errors.whyHireYou || charOver ? styles.inputError : null,
                ]}
                placeholder="Tell us about your skills, experience, and what makes you the best fit..."
                placeholderTextColor="#AFAFAF"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                returnKeyType="done"
              />
            )}
          />
          <View style={styles.charRow}>
            {errors.whyHireYou ? (
              <Text style={styles.errorText}>
                ⚠ {errors.whyHireYou.message}
              </Text>
            ) : (
              <View />
            )}
            <Text style={[styles.charCount, charOver && styles.charCountOver]}>
              {charCount}/1000
            </Text>
          </View>
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Submit Application ✦</Text>
        </Pressable>

        <Text style={styles.footerNote}>
          By submitting, you confirm all provided information is accurate.
        </Text>
      </ScrollView>

      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={handleSuccessClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalEmoji}>🎉</Text>
            <Text style={styles.modalTitle}>Application Sent!</Text>
            <Text style={styles.modalBody}>
              Your application has been submitted successfully. Good luck —
              we'll be in touch!
            </Text>
            <Pressable style={styles.modalButton} onPress={handleSuccessClose}>
              <Text style={styles.modalButtonText}>
                {fromSaved ? "Okay" : "Done"}
              </Text>
            </Pressable>
            {fromSaved && (
              <Text style={styles.modalRedirectNote}>
                You'll be taken back to Job Finder.
              </Text>
            )}
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
