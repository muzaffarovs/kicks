"use client";
import { Search } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  item: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
});

export const SearchForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { item: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.item);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex  md:block items-baseline justify-between"
      >
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem className="text-white w-full">
              <FormControl>
                <Input
                  id="item"
                  className="w-full text-black bg-white"
                  placeholder="Search..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-700 text-sm mt-1" />
            </FormItem>
          )}
        />
        <Button
          className="bg-transparent md:bg-background shadow-none md:shadow-sm md:border"
          type="submit"
          disabled={!form.formState.isValid}
        >
          <Search color="black" className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};
