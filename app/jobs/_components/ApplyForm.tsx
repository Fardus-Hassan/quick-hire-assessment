"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateApplicationMutation } from "@/lib/api/applicationsApi";

const applySchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email address"),
  resumeUrl: z.string().url("Enter a valid URL"),
  coverNote: z.string().min(10, "Cover note should be at least 10 characters"),
});

type ApplyFormValues = z.infer<typeof applySchema>;

type ApplyFormProps = {
  jobId: string;
  jobTitle: string;
};

export function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [createApplication, { isLoading }] = useCreateApplicationMutation();

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      name: "",
      email: "",
      resumeUrl: "",
      coverNote: "",
    },
  });

  async function onSubmit(values: ApplyFormValues) {
    try {
      await createApplication({
        job_id: jobId,
        name: values.name.trim(),
        email: values.email.trim(),
        resume_link: values.resumeUrl.trim(),
        cover_note: values.coverNote.trim(),
      }).unwrap();
      setSubmitted(true);
      toast.success("Application submitted successfully");
      form.reset();
    } catch (error) {
      const message =
        (error as Error | undefined)?.message ??
        "Failed to submit application";
      toast.error(message);
    }
  }

  return (
    <div className="border border-[#D6DDEB] bg-white p-6 md:p-8 rounded-md shadow-sm">
      <h2 className="text-[20px] md:text-[22px] font-semibold text-[#25324B] mb-4">
        Apply Now
      </h2>
      <p className="text-[14px] text-[#25324B] mb-6">
        Fill in the form below to apply for{" "}
        <span className="font-semibold text-[#25324B]">{jobTitle}</span>.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-[#25324B]">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-[#25324B]">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resumeUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-[#25324B]">Resume link (URL)</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://drive.google.com/..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverNote"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] text-[#25324B]">Cover note</FormLabel>
                <FormControl>
                  <textarea
                    className="file:text-foreground border-[#D6DDEB]  placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 text-[#25324B] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    rows={4}
                    placeholder="Write a short cover note..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto bg-[#4640DE] hover:bg-[#3b36be] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit application"}
          </Button>

          {submitted && !isLoading && (
            <p className="text-[13px] text-[#56CDAD] mt-2">
              Application submitted!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}

