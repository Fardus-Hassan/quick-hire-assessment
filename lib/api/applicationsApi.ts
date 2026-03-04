import { baseApi } from "./baseApi";

export type ApplicationPayload = {
  job_id: string;
  name: string;
  email: string;
  resume_link: string;
  cover_note: string;
};

export const applicationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createApplication: build.mutation<void, ApplicationPayload>({
      query: (body) => ({
        url: "/applications",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Applications", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateApplicationMutation } = applicationsApi;

