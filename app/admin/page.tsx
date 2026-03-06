"use client";

import { useMemo, useState } from "react";
import { Trash2, Plus, Eye } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/Container";
import { Pagination } from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Job } from "@/lib/types";
import {
  useCreateJobMutation,
  useDeleteJobMutation,
  useGetJobsQuery,
} from "@/lib/api/jobsApi";
import { JOB_CATEGORIES } from "@/lib/constants";
import { FadeInSection } from "@/components/FadeInSection";

const jobSchema = z.object({
  title: z.string().min(2, "Job title is required"),
  company: z.string().min(2, "Company is required"),
  location: z.string().min(2, "Location is required"),
  category: z.string().min(1, "Category is required"),
  short_description: z
    .string()
    .min(10, "Short description should be at least 10 characters"),
  main_description: z
    .string()
    .min(10, "Main description should be at least 10 characters"),
});

type JobFormValues = z.infer<typeof jobSchema>;

export default function AdminPage() {
  const [listingsPage, setListingsPage] = useState(1);
  const [mainDescPreviewOpen, setMainDescPreviewOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { data, isLoading } = useGetJobsQuery({
    page: listingsPage,
  });
  const jobs = data?.data ?? [];
  const pagination = data?.pagination;

  const [createJob, { isLoading: isCreating }] = useCreateJobMutation();
  const [deleteJob] = useDeleteJobMutation();

  const jobForm = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      company: "",
      location: "",
      category: "",
      short_description: "",
      main_description: "",
    },
  });

  const mainDescriptionValue = jobForm.watch("main_description");

  async function handleAddJob(values: JobFormValues) {
    if (isCreating) return;

    const payload: Omit<Job, "id"> = {
      title: values.title.trim(),
      company: values.company.trim(),
      location: values.location.trim(),
      category: values.category.trim(),
      short_description: values.short_description.trim(),
      main_description: values.main_description.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      await createJob(payload).unwrap();
      toast.success("Job created successfully");
      setListingsPage(1);
      jobForm.reset();
    } catch (error) {
      const message =
        (error as Error | undefined)?.message ?? "Failed to create job";
      toast.error(message);
    }
  }

  async function handleDeleteJob(id: string) {
    try {
      setDeletingId(id);
      await deleteJob(id).unwrap();
      toast.success("Job deleted successfully");
    } catch (error) {
      const message =
        (error as Error | undefined)?.message ?? "Failed to delete job";
      toast.error(message);
    } finally {
      setDeletingId(null);
    }
  }

  const totalListingsPages = pagination?.totalPages ?? 1;

  return (
    <FadeInSection
      className="relative w-full bg-[#F8F8FD]"
      delay={0.1}
      animateOnMount
    >
      <section className="py-12 md:py-16 lg:py-20">
          <Container>
            <div className="mb-8">
              <h1 className="text-[28px] md:text-[36px] font-semibold text-[#25324B]">
                Admin – Manage jobs
              </h1>
              <p className="mt-2 text-[14px] md:text-[15px] text-[#7C8493] max-w-2xl">
                This basic admin view lets you add new job listings and delete
                existing ones. Data is kept in memory only for the demo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] gap-10 lg:gap-12 items-start">
              <div className="lg:sticky lg:top-24 border border-[#D6DDEB] bg-white p-6 md:p-8 rounded-md shadow-sm lg:self-start">
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#25324B] mb-4">
                  Add new job
                </h2>

                <Form {...jobForm}>
                  <form
                    onSubmit={jobForm.handleSubmit(handleAddJob)}
                    className="space-y-4"
                  >
                    <FormField
                      control={jobForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[14px] font-medium text-[#25324B]">
                            Job title
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="e.g. Senior Frontend Engineer"
                            />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={jobForm.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[14px] font-medium text-[#25324B]">
                            Company
                          </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g. QuickHire" />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={jobForm.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[14px] font-medium text-[#25324B]">
                              Location
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="e.g. Dhaka, Bangladesh"
                              />
                            </FormControl>
                            {/* <FormMessage /> */}
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={jobForm.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[14px] font-medium text-[#25324B]">
                              Category
                            </FormLabel>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full bg-white border-[#D6DDEB] text-[#25324B]">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {JOB_CATEGORIES.map((cat) => (
                                  <SelectItem key={cat} value={cat}>
                                    {cat}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {/* <FormMessage /> */}
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={jobForm.control}
                      name="short_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[14px] font-medium text-[#25324B]">
                            Short description
                          </FormLabel>
                          <FormControl>
                            <textarea
                              className="file:text-foreground border-[#D6DDEB] text-[#25324B] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-white w-full min-w-0 rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                              rows={2}
                              placeholder="Brief summary for listings..."
                              {...field}
                            />
                          </FormControl>
                          {/* <FormMessage />  */}
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={jobForm.control}
                      name="main_description"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <FormLabel className="text-[14px] font-medium text-[#25324B]">
                              Main description (HTML)
                            </FormLabel>
                            <Dialog
                              open={mainDescPreviewOpen}
                              onOpenChange={setMainDescPreviewOpen}
                            >
                              <DialogTrigger asChild>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="text-[10px]"
                                >
                                  <Eye className="size-3" />
                                  Preview
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[min(90vw,36rem)] max-h-[85vh] flex flex-col bg-white border-[#D6DDEB]">
                                <DialogHeader>
                                  <DialogTitle className="text-[#25324B] text-left">
                                    Preview – Main description
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="overflow-y-auto flex-1 min-h-0 rounded-md bg-[#F8FAFE] p-4 mt-2">
                                  {mainDescriptionValue?.trim() ? (
                                    <div
                                      className="prose prose-sm max-w-none text-[15px] leading-relaxed text-[#515B6F] prose-p:my-2 prose-ul:my-2 prose-li:my-0.5"
                                      dangerouslySetInnerHTML={{
                                        __html: mainDescriptionValue.trim(),
                                      }}
                                    />
                                  ) : (
                                    <p className="text-[14px] text-[#7C8493] italic">
                                      Nothing to preview yet. Add some HTML in
                                      the field above and click Preview again.
                                    </p>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <FormControl>
                            <textarea
                              className="bg-white file:text-foreground border-[#D6DDEB] text-[#25324B] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-white w-full min-w-0 rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-h-[120px]"
                              rows={5}
                              placeholder="Rich HTML for detail page (e.g. <p>, <strong>, <u>, <span style=...>)"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      // disabled={!jobForm.formState.isValid || isCreating}
                      className="mt-2 inline-flex items-center gap-2 bg-[#4640DE] hover:bg-[#3b36be] disabled:cursor-not-allowed"
                    >
                      {isCreating ? (
                        <span>Adding...</span>
                      ) : (
                        <>
                          <Plus className="size-4" />
                          <span>Add job</span>
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              <div>
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#25324B] mb-4">
                  Current listings
                </h2>
                {isLoading && jobs.length === 0 ? (
                  <AdminJobsSkeleton />
                ) : (
                  <div className="space-y-4">
                    {jobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white border border-[#D6DDEB] rounded-md p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                      >
                        <div>
                          <p className="text-[15px] font-semibold text-[#25324B]">
                            {job.title}
                          </p>
                          <p className="text-[13px] text-[#7C8493]">
                            {job.company} <span className="mx-1">•</span>{" "}
                            {job.location} <span className="mx-1">•</span>{" "}
                            {job.category}
                          </p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="inline-flex items-center gap-2"
                            >
                              <Trash2 className="size-4" />
                              Delete
                            </Button>
                          </DialogTrigger>
                          <DialogContent
                            showCloseButton={false}
                            className="max-w-sm rounded-xl border-0 bg-white px-6 py-6 shadow-xl data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-4"
                          >
                            <DialogHeader className="text-center">
                              <DialogTitle className="text-[18px] font-semibold text-[#25324B]">
                                Are you sure you want to delete?
                              </DialogTitle>
                            </DialogHeader>
                            <p className="mt-2 text-[14px] text-[#7C8493] text-center">
                              This action cannot be undone. Do you really want
                              to remove this job from the listings?
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-3">
                              <DialogClose asChild>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="min-w-[96px] border-[#D6DDEB] bg-[#F3F4F6] text-[#25324B] hover:bg-[#E5E7EB]"
                                >
                                  Cancel
                                </Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteJob(job.id)}
                                  disabled={deletingId === job.id}
                                  className="min-w-[110px] inline-flex items-center justify-center gap-2"
                                >
                                  {deletingId === job.id
                                    ? "Deleting..."
                                    : "Confirm"}
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))}

                    {jobs.length === 0 && !isLoading && (
                      <p className="text-[14px] text-[#7C8493]">
                        No jobs available. Add a new job using the form.
                      </p>
                    )}
                  </div>
                )}
                {pagination && jobs.length > 0 && totalListingsPages > 1 && (
                  <Pagination
                    currentPage={pagination.page}
                    totalPages={pagination.totalPages}
                    totalItems={pagination.total}
                    onPageChange={setListingsPage}
                    itemLabel="total"
                    showTopBorder={false}
                    className="mt-6"
                  />
                )}
              </div>
            </div>
          </Container>
      </section>
    </FadeInSection>
  );
}

function AdminJobsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white border border-[#D6DDEB] rounded-md p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 animate-pulse"
        >
          <div className="space-y-2 w-full md:w-auto">
            <div className="h-4 w-40 bg-[#E5E7EB] rounded-md" />
            <div className="h-3 w-64 bg-[#E5E7EB] rounded-md" />
          </div>
          <div className="h-8 w-24 bg-[#F3F4F6] rounded-md" />
        </div>
      ))}
    </div>
  );
}

