"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginForm() {
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid email or password");
      } else {
        toast.success("Logged in successfully!");
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-6">
      <div className="space-y-6 w-full max-w-md bg-secondary/10 glass-card p-8 rounded-2xl border border-border/40 shadow-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight uppercase">
                Login
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
              <p className="text-xs text-muted-foreground">
                Only authorized administrator access permitted
              </p>
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5 text-left">
                  <FormLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-indigo-500 hover:text-indigo-600 font-semibold hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full flex items-center justify-center bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3 rounded-xl shadow-md transition-all duration-350 cursor-pointer"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
