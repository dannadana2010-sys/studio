"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez saisir une adresse e-mail valide.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

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
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Envoyé !",
      description: "Merci de nous avoir contactés. Nous reviendrons vers vous rapidement.",
    });
    form.reset();
  }

  return (
    <Card className="bg-accent border-border">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-white">Ou envoyez-nous un message</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nom Complet</FormLabel>
                  <FormControl>
                    <StylishInput field={field} placeholder="Ex: Jean Dupont" />
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
                  <FormLabel className="text-white">Email Professionnel</FormLabel>
                  <FormControl>
                     <StylishInput field={field} placeholder="contact@entreprise.com" />
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
                  <FormLabel className="text-white">Téléphone (Optionnel)</FormLabel>
                  <FormControl>
                    <StylishInput field={field} placeholder="+33 1 23 45 67 89" />
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
                  <FormLabel className="text-white">Votre message</FormLabel>
                  <FormControl>
                    <StylishTextarea
                      field={field}
                      placeholder="Veuillez fournir les détails de votre demande..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
