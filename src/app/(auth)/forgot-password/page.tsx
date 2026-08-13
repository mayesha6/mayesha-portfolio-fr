"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { forgotPassword } from "@/actions/auth";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const res = await forgotPassword(email);
      toast.success("OTP sent to your email!");
      
      // Developer testing helper (showing OTP since SMTP might not be set up)
      if (res?.data?.otp) {
        toast.info(`[Demo helper] Reset OTP is: ${res.data.otp}`, {
          duration: 10000,
        });
      }
      
      // Redirect to reset password page with email in query string
      setTimeout(() => {
        window.location.href = `/reset-password?email=${encodeURIComponent(email)}`;
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Failed to request password reset");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-6">
      <div className="space-y-6 w-full max-w-md bg-secondary/10 glass-card p-8 rounded-2xl border border-border/40 shadow-xl text-left">
        <div className="space-y-2 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft size={12} />
            <span>Back to Login</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight uppercase">
            Forgot Password
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Enter your email below. We&apos;ll send you a 6-digit OTP code to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={16} />
              <Input
                type="email"
                placeholder="soumyrhmn234@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3 pl-10"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3 rounded-xl shadow-md transition-all duration-350 cursor-pointer disabled:opacity-70"
          >
            {loading ? "Sending OTP..." : "Request Reset OTP"}
          </Button>
        </form>
      </div>
    </div>
  );
}
