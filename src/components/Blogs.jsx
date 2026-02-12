"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs, blogCategories } from "@/data/blogsData";

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredBlogs =
    activeCategory === "Tous"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="py-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Titre */}
        <div className="text-center mb-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1d428a] leading-tight">
            Nos articles
          </h1>
          <p className="text-gray-500 mt-3">
            Conseils d’experts pour piloter votre entreprise sereinement
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Tous", ...blogCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white text-gray-600 border hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid blogs */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col h-full">
                <span className="text-xs font-semibold text-blue-600 mb-2">
                  {blog.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-0 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-auto inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Lire l’article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
