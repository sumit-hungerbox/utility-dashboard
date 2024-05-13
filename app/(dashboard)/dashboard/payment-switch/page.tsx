"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

export default function PaymentSwitch() {
  const [paymentSource, setPaymentSource] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const defaultValues = {
    source_payment_source_code: "",
    target_payment_source_code: "",
    company_ids: "",
  };
  const { toast } = useToast();

  const formSchema = z.object({
    source_payment_source_code: z
      .string()
      .min(1, { message: "Please select a payment source" }),
    target_payment_source_code: z
      .string()
      .min(1, { message: "Please select a payment source" }),
    company_ids: z.string().min(1, { message: "Please enter company IDs" }),
  });

  type PaymentSwitchForm = z.infer<typeof formSchema>;

  const form = useForm<PaymentSwitchForm>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: PaymentSwitchForm) => {
    const payload = {
      operation_type: "switch_payment_method_for_companies",
      operation_data: {
        source_payment_source_code: data.source_payment_source_code,
        target_payment_source_code: data.target_payment_source_code,
        company_ids: data.company_ids,
      },
    };

    fetch(
      "https://admin.rc.hungerbox.com/internal/api/v3/utilities/trigger-utility",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer bv6PRaJFWvCPXG8ckcM2CQQuuskQ7d`,
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast({
          description:
            String(data?.data) ?? "Payment gateway switched successfully",
        });
        form.reset(defaultValues);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://admin.rc.hungerbox.com/internal/api/v3/utilities/load-utility-data?operation_type=switch_payment_method_for_companies",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer bv6PRaJFWvCPXG8ckcM2CQQuuskQ7d`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.payment_source_code_choices) {
          setPaymentSource(data.data.payment_source_code_choices);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Skeleton className="h-8 w-full sm:w-9/12 mb-16" />
        <div className="flex flex-col sm:flex-row space-x-0 space-y-12 sm:space-x-12 sm:space-y-0">
          <div className="space-y-2">
            <Skeleton className="h-4 w-9/12" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-9/12" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <Skeleton className="h-[75px] w-full sm:w-9/12 rounded-xl mt-12" />
        <Skeleton className="h-4 w-full sm:w-[250px] rounded-xl my-4" />
        <Skeleton className="h-[48px] w-full sm:w-1/4 rounded-xl my-12" />
      </>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight :sm:text-4xl">
          Payment Gateway Switch
        </h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
          <div className="flex flex-col justify-between my-6 space-y-4 items-center md:space-x-4 md:space-y-0 w-full md:w-9/12 md:flex-row">
            <FormField
              control={form.control}
              name="source_payment_source_code"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Source Payment Gateway</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a payment source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {paymentSource.map((source) => (
                        <SelectItem key={source} value={source}>
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ArrowRightLeft className="w-full" />

            <FormField
              control={form.control}
              name="target_payment_source_code"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Target Payment Gateway</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={
                      !form.getValues("source_payment_source_code") ?? false
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a payment source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {paymentSource.map((source) => (
                        <SelectItem
                          key={source}
                          value={source}
                          disabled={
                            form.getValues("source_payment_source_code") ===
                            source
                          }
                        >
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company_ids"
            render={({ field }) => (
              <FormItem className="mb-12">
                <FormLabel>Company IDs</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter company IDs..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter all to switch all companies. Enter comma separated
                  values
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full sm:w-1/4"
            disabled={isLoading || form.formState.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
