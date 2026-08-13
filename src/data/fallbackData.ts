import { IProject, IPost } from "@/types";

export const fallbackProjects: IProject[] = [
  {
    id: "fb-1",
    title: "ToyNest - E-Commerce Playstore",
    content: "A full-featured toy store e-commerce application with dynamic product catalogs, shopping cart logic, and checkout integrations.",
    thumbnail: "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?q=80&w=600&auto=format&fit=crop",
    techStack: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"],
    livelink: "https://toynest-client.web.app",
    repolink: "https://github.com/mayesha6/ToyNest-Client"
  },
  {
    id: "fb-2",
    title: "Restaurant Management System",
    content: "An operational dashboard managing tables, bookings, orders, and reservations with real-time analytics and visual tables mapping.",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    techStack: ["React.js", "Tailwind CSS", "Ant Design", "Node.js", "MongoDB"],
    livelink: "https://dine-dashboard.web.app",
    repolink: "https://github.com/mayesha6/Restaurant-Management-Client"
  },
  {
    id: "fb-3",
    title: "Secure Digital Wallet",
    content: "A finance wallet system supporting wallet-to-wallet transactions, role-based access control, history logs, and transaction status verification.",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=600&auto=format&fit=crop",
    techStack: ["Express.js", "MongoDB", "React.js", "Tailwind CSS", "Mongoose"],
    livelink: "https://digitalwallet-client.web.app",
    repolink: "https://github.com/mayesha6/digital-wallet-system"
  },
  {
    id: "fb-4",
    title: "Library Management Hub",
    content: "A restful API solution for books tracking, borrowing limits validation, aggregations for authors, and database triggers.",
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    livelink: "https://library-hub-api.web.app",
    repolink: "https://github.com/mayesha6/library-management-system"
  }
];

export const fallbackPosts: IPost[] = [
  {
    id: 101,
    title: "Understanding Server Components in Next.js 15",
    content: "Deep dive into React Server Components (RSC) and Turbopack. We examine why server rendering improves load times and how to leverage streaming mechanisms.",
    thumbnail: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop",
    isFeatured: true,
    tags: ["Next.js", "React", "Frontend"],
    views: 452,
    authorId: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      name: "Mayesha Mumtaz",
      picture: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761590871/e789a464-ae43-49ea-b6ee-6f1aad2d2d94_gwdliu.jpg",
      isVerified: true
    }
  },
  {
    id: 102,
    title: "Mastering MongoDB & Mongoose Schema Modeling",
    content: "Learn how to build optimal relationships in MongoDB databases using references, embeddings, and aggregation pipelines for high throughput apps.",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
    isFeatured: true,
    tags: ["MongoDB", "Database", "MERN"],
    views: 312,
    authorId: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      name: "Mayesha Mumtaz",
      picture: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761590871/e789a464-ae43-49ea-b6ee-6f1aad2d2d94_gwdliu.jpg",
      isVerified: true
    }
  },
  {
    id: 103,
    title: "A Designer's Guide to Tailwind CSS v4 Layouts",
    content: "Explore the newest capabilities in Tailwind CSS v4 including inline @theme customization, fluid typography, dynamic grid areas, and performance optimizations.",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    isFeatured: true,
    tags: ["Tailwind", "CSS", "Design"],
    views: 529,
    authorId: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      name: "Mayesha Mumtaz",
      picture: "https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761590871/e789a464-ae43-49ea-b6ee-6f1aad2d2d94_gwdliu.jpg",
      isVerified: true
    }
  }
];
