"use client";
import Form from "next/form";
import { useState } from "react";
import { createProject } from "@/actions/createProject";

export default function CreateProjectForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title")?.toString().trim();
    const content = formData.get("content")?.toString().trim();
    const thumbnail = formData.get("thumbnail")?.toString().trim();
    const livelink = formData.get("livelink")?.toString().trim();
    const repolink = formData.get("repolink")?.toString().trim();
    const techStack = formData.get("techStack")?.toString().trim();

    if (!title || !content || !thumbnail || !techStack || !livelink || !repolink) {
      setError("All fields are required!");
      return;
    }

    setError(null); 
    await createProject(formData); 
  };

  return (
    <Form
      action={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded-lg shadow-md space-y-4"
    >
      {error && (
        <p className="text-red-600 font-medium text-center">{error}</p>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          name="content"
          rows={4}
          placeholder="Write your content here..."
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          name="thumbnail"
          placeholder="https://example.com/image.jpg"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Livesite Link
        </label>
        <input
          type="url"
          name="livelink"
          placeholder="https://example.com/image.jpg"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Repository Link
        </label>
        <input
          type="url"
          name="repolink"
          placeholder="https://example.com/image.jpg"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          techStack (comma separated)
        </label>
        <input
          type="text"
          name="techStack"
          placeholder="e.g. react,nextjs,tailwind"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
