"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { resetPassword } from "@/actions/auth";
import Link from "next/link";
import { KeyRound, Lock, ArrowLeft } from "lucide-react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Read email from query parameters
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !otp || !newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await resetPassword({
        email,
        otp,
        newPassword,
        confirmPassword,
      });
      toast.success("Password reset successfully!");
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Failed to reset password. Check OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-6">
      <div className="space-y-6 w-full max-w-md bg-secondary/10 glass-card p-8 rounded-2xl border border-border/40 shadow-xl text-left">
        <div className="space-y-2 text-center">
          <Link
            href="/forgot-password"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft size={12} />
            <span>Request another OTP</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight uppercase">
            Reset Password
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            Enter the 6-digit OTP code sent to your email and set your new password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3"
            />
          </div>

          {/* OTP */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              6-Digit OTP Code
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={16} />
              <Input
                type="text"
                placeholder="123456"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3 pl-10 tracking-widest font-mono"
              />
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={16} />
              <Input
                type="password"
                placeholder="••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3 pl-10"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={16} />
              <Input
                type="password"
                placeholder="••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl py-3 pl-10"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3 rounded-xl shadow-md transition-all duration-350 cursor-pointer disabled:opacity-70 mt-2"
          >
            {loading ? "Resetting Password..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
