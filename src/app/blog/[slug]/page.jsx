import { blogs } from "@/data/blogsData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
  const { slug } = await params; // ⭐ correction importante

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <article className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Catégorie */}
        <span className="text-sm font-semibold text-blue-600">
          {blog.category}
        </span>

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
          {blog.title}
        </h1>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </article>
  );
}
