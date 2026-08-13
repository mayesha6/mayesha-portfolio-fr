"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import Wave from "@/components/shared/Wave";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message.", { id: toastId });
      }
    } catch (err) {
      console.error("Error sending contact email:", err);
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full bg-background pt-16">
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl uppercase">
            Get in Touch
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            Have a question, collaboration idea, or just want to say hi? Feel free to reach out.
          </p>
        </div>

      <div className="grid md:grid-cols-12 gap-12 items-stretch">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 h-full">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border/40 shadow-lg text-left h-full flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fill out the form or reach out directly using the details below. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email Me</p>
                  <a href="mailto:soumy.dev@gmail.com" className="text-sm font-semibold text-foreground hover:underline">
                    soumy.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Call Me</p>
                  <a href="tel:+8801881979246" className="text-sm font-semibold text-foreground hover:underline">
                    +880 1881-979246
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Location</p>
                  <p className="text-sm font-semibold text-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 h-full">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border/40 shadow-lg text-left h-full">
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
              <div className="flex-1 flex flex-col space-y-4 pb-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Subject of message"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col min-h-[180px]">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-secondary/45 border-border/60 focus:border-indigo-500/40 rounded-xl resize-none flex-1 min-h-[140px]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3 rounded-xl shadow-md transition-all duration-350 cursor-pointer mt-auto"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={15} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    {/* Bottom Wave transitioning to Footer (bg-secondary) */}
    <Wave fillColor="text-secondary" />
  </div>
  );
}
