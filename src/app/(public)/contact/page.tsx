"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Facebook, Linkedin, Phone, Mail } from "lucide-react";

// export const metadata = {
//   title: "Contact | Mayesha",
// };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="container mx-auto my-36 px-5">
      <h1 className="text-4xl mb-4 text-center">Contact Me</h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
        Have a question, collaboration idea, or just want to say hi? Feel free
        to reach out — I&apos;d love to hear from you!
      </p>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">Name</label>
            <Input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Subject</label>
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Message</label>
            <Textarea
              name="message"
              placeholder="Write your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full text-[#FDC435] bg-transparent border border-[#FDC435] hover:bg-[#FDC435] hover:text-white font-semibold py-2 rounded-lg duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-500">Or contact me directly:</p>
        <p className="font-semibold mt-1 flex justify-center items-center gap-1"><Mail size={26}/> soumyrhmn234@gmail.com</p>
        <p className="font-semibold mb-1 flex justify-center items-center gap-1"><Phone size={26}/> +8801881979246</p>
        <nav>
          <ul className="flex justify-center items-center gap-2">
            <li>
              <a
                href="https://github.com/mayesha6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FDC435] transition"
              >
                <Github size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mayesha.soumy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FDC435] transition"
              >
                <Facebook size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mayesha-mumtaz-6607b4315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[#FDC435] transition"
              >
                <Linkedin size={26} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
