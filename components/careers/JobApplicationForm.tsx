
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const phoneRegex = /^\+?[1-9]\d{9,14}$/;

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .regex(phoneRegex, { message: "Please enter a valid phone number" }),
  linkedin: z.string().url({ message: "Please enter a valid LinkedIn URL" }).optional().or(z.literal("")),
  coverLetter: z
    .string()
    .min(100, { message: "Cover letter must be at least 100 characters" })
    .max(2000, { message: "Cover letter must be less than 2000 characters" }),
  resume: z.any(),
});

type FormValues = z.infer<typeof formSchema>;

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
  onCancel: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  jobId,
  jobTitle,
  onCancel,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      coverLetter: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted", { jobId, jobTitle, ...values });
      setIsSubmitting(false);
      
      toast.success("Application submitted", {
        description: "We'll review your application and get back to you soon!",
      });
      
      onCancel(); // Close the form after submission
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://linkedin.com/in/yourusername" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us why you're interested in this position and what makes you a good fit."
                  className="min-h-40"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Between 100-2000 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume/CV</FormLabel>
              <FormControl>
                <Input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormDescription>
                Upload your resume as PDF or Word document (max 5MB)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JobApplicationForm;
