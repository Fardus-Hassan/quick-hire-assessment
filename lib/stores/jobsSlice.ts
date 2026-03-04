import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Job } from "@/lib/types";

export type JobsState = {
  items: Job[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: JobsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchJobs = createAsyncThunk<Job[]>(
  "jobs/fetchJobs",
  async () => {
    const res = await fetch("/api/jobs");
    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const data: Job[] = await res.json();
    return data;
  },
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.items.unshift(action.payload);
    },
    deleteJob: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((job) => job.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch jobs";
      });
  },
});

export const { addJob, deleteJob } = jobsSlice.actions;
export const jobsReducer = jobsSlice.reducer;

