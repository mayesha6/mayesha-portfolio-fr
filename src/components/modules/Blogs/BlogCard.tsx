/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, ArrowUpRight } from "lucide-react";

export default function BlogCard({ post }: { post: any; user?: any }) {
  return (
    <div className="group glass-card border border-border/40 hover:border-indigo-500/20 shadow-md hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full">
      <Link
        href={`/blogs/${post.id}`}
        className="block flex-grow flex flex-col"
      >
        {post.thumbnail ? (
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="h-48 w-full bg-secondary flex items-center justify-center text-muted-foreground text-sm font-semibold">
            No Thumbnail Image
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1 leading-snug">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
              {post.content}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div className="flex items-center gap-2.5">
                <Image
                  src={
                    post?.author?.picture ||
                    "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                  }
                  alt={post?.author?.name || "Author"}
                  width={28}
                  height={28}
                  className="rounded-full border border-border/60"
                />
                <span className="text-foreground/80 font-medium text-xs flex items-center gap-1">
                  {post?.author?.name}
                  {post?.author?.isVerified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <span className="text-muted-foreground text-xs flex items-center gap-1">
                <Eye size={14} />
                <span>{post.views} views</span>
              </span>
            </div>

            <div className="flex items-center justify-end text-primary group-hover:text-primary/80 font-semibold text-xs transition-colors">
              <span>Read Article</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
