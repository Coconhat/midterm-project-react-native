import { Job } from "@/types/jobs";
import { create } from "zustand";

interface SavedJobsState {
  savedJobs: Job[];
  toggleSaveJob: (job: Job) => void;
  removeJob: (jobId: string) => void;
  isJobSaved: (jobId: string) => boolean;
}

export const useSavedJobsStore = create<SavedJobsState>((set, get) => ({
  savedJobs: [],

  toggleSaveJob: (job) =>
    set((state) => {
      const exists = state.savedJobs.some((j) => j.id === job.id);
      if (exists) {
        return {
          savedJobs: state.savedJobs.filter((j) => j.id !== job.id),
        };
      }
      return {
        savedJobs: [...state.savedJobs, job],
      };
    }),

  removeJob: (jobId) =>
    set((state) => ({
      savedJobs: state.savedJobs.filter((j) => j.id !== jobId),
    })),

  isJobSaved: (jobId) => {
    return get().savedJobs.some((j) => j.id === jobId);
  },
}));
