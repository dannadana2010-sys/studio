"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLanguage } from "@/context/language-context";
import { sendContactEmail } from "@/ai/flows/send-contact-email";

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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const StylishInput = ({ field, placeholder }: { field: any, placeholder: string }) => (
    <Input
        placeholder={placeholder}
        {...field}
        className="bg-transparent border-0 border-b-2 border-border rounded-none px-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition-colors"
    />
);

const StylishTextarea = ({ field, placeholder }: { field: any, placeholder: string }) => (
     <Textarea
        placeholder={placeholder}
        className="bg-transparent border-0 border-b-2 border-border rounded-none px-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition-colors min-h-[120px]"
        {...field}
    />
);


export function ContactForm() {
  const { translations, language } = useLanguage();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: translations.contact.form.validation.name,
    }),
    email: z.string().email({
      message: translations.contact.form.validation.email,
    }),
    phone: z.string().optional(),
    message: z.string().min(10, {
      message: translations.contact.form.validation.message,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    key: language, // Re-mount form on language change
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await sendContactEmail(values);
      toast({
        title: translations.contact.form.toast.title,
        description: translations.contact.form.toast.description,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    }
  }

  return (
    <Card className="bg-accent border-border">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-white">{translations.contact.form.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">{translations.contact.form.name.label}</FormLabel>
                  <FormControl>
                    <StylishInput field={field} placeholder={translations.contact.form.name.placeholder} />
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
                  <FormLabel className="text-white">{translations.contact.form.email.label}</FormLabel>
                  <FormControl>
                     <StylishInput field={field} placeholder={translations.contact.form.email.placeholder} />
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
                  <FormLabel className="text-white">{translations.contact.form.phone.label}</FormLabel>
                  <FormControl>
                    <StylishInput field={field} placeholder={translations.contact.form.phone.placeholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">{translations.contact.form.message.label}</FormLabel>
                  <FormControl>
                    <StylishTextarea
                      field={field}
                      placeholder={translations.contact.form.message.placeholder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? translations.contact.form.submit.submitting : translations.contact.form.submit.default}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
