import BlogCard from "@/components/BlogCard";
import { blogmetadata } from "@/data/blogs";


export default function Blogs() {
  return (
    <main>
      {blogmetadata.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </main>
  );
}
