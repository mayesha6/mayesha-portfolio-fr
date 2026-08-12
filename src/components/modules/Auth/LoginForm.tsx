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
import { login } from "@/actions/auth";

// type LoginFormValues = {
//   email: string;
//   password: string;
// };

export default function LoginForm() {
  console.log();
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: FieldValues) => {
    const res = await login(values);
    console.log(res);
    try {
      const res = await login(values);
      console.log(res);
      // if (res?.data?.id) {
      //   toast.success("User Logged in Successfully");
      //   router.push("/dashboard");
      // } else {
      //   toast.error("User Login Failed");
      // }
      await signIn("credentials", {
        ...values,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (err) {
      console.error(err);
    }
  };

 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            <h2 className="text-3xl font-bold text-center">Login</h2>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
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
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
