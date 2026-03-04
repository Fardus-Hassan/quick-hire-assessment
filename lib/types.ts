export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  /** Short summary for listings. */
  short_description: string;
  /** Optional rich HTML for the job detail page (bold, underline, color, etc.). */
  main_description?: string;
  created_at: string;
};

