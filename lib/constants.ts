export const JOB_CATEGORIES = [
  "Design",
  "Sales",
  "Marketing",
  "Finance",
  "Technology",
  "Engineering",
  "Business",
  "Human Resource",
] as const;

export type JobCategory = (typeof JOB_CATEGORIES)[number];

