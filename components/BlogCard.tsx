import { BlogMetadata } from "@/data/blogs";
import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";

export default function BlogCard({ blog }: { blog: BlogMetadata }) {
  return (
    <Link
      className="flex flex-col gap-2 border border-zinc-800 rounded-md p-4 my-3 hover:scale-105 transition-all"
      href={blog.link}
    >
      <h1 className="text-2xl font-extrabold">
        {blog.title}
      </h1>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <FaCalendar />
          <span className="text-sm">{blog.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock />
          <span className="text-sm">{blog.readingTime}</span>
        </div>
      </div>

      <p className="text-sm">
        {blog.description}
      </p>
    </Link>
  );
}
