import type { Job } from "@/lib/types";
import { baseApi } from "./baseApi";

type CreateJobPayload = Omit<Job, "id">;

type JobsApiJob = {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  short_description: string;
  main_description?: string;
  created_at: string;
};

type JobsPagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type JobsListResponse = {
  data: JobsApiJob[];
  pagination: JobsPagination;
};

type JobsQueryResult = {
  data: Job[];
  pagination: JobsPagination;
};

type JobsQueryArgs = {
  search?: string;
  category?: string;
  location?: string;
  page?: number;
};

function mapJobFull(apiJob: JobsApiJob): Job {
  return {
    id: apiJob._id,
    title: apiJob.title,
    company: apiJob.company,
    location: apiJob.location,
    category: apiJob.category,
    short_description: apiJob.short_description,
    main_description: apiJob.main_description,
    created_at: apiJob.created_at,
  };
}

function mapJobSummary(apiJob: JobsApiJob): Job {
  return {
    id: apiJob._id,
    title: apiJob.title,
    company: apiJob.company,
    location: apiJob.location,
    category: apiJob.category,
    short_description: apiJob.short_description,
    // main_description intentionally omitted in list
    created_at: apiJob.created_at,
  };
}

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<JobsQueryResult, JobsQueryArgs | void>({
      query: (args) => {
        const params = new URLSearchParams();
        if (args?.search) params.set("search", args.search);
        if (args?.category) params.set("category", args.category);
        if (args?.location) params.set("location", args.location);
        if (args?.page) params.set("page", String(args.page));
        const queryString = params.toString();
        return queryString ? `/jobs?${queryString}` : "/jobs";
      },
      transformResponse: (response: JobsListResponse): JobsQueryResult => ({
        data: response.data.map(mapJobSummary),
        pagination: response.pagination,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((job) => ({
                type: "Jobs" as const,
                id: job.id,
              })),
              { type: "Jobs", id: "LIST" },
            ]
          : [{ type: "Jobs", id: "LIST" }],
    }),
    createJob: build.mutation<Job, CreateJobPayload>({
      query: (body) => ({
        url: "/jobs",
        method: "POST",
        body,
      }),
      transformResponse: (response: JobsApiJob): Job => mapJobFull(response),
      invalidatesTags: [{ type: "Jobs", id: "LIST" }],
    }),
    getJob: build.query<Job, string>({
      query: (id) => `/jobs/${id}`,
      transformResponse: (response: JobsApiJob): Job => mapJobFull(response),
      providesTags: (result, error, id) => [{ type: "Jobs", id }],
    }),
    deleteJob: build.mutation<void, string>({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Jobs", id },
        { type: "Jobs", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetJobsQuery,
  useCreateJobMutation,
  useGetJobQuery,
  useDeleteJobMutation,
} = jobsApi;

