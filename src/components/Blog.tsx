"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
  description: string;
  author: Author;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Artificial Intelligence: Trends and Challenges",
      date: "Oct 11, 2023",
      imageUrl: "/images/home2.jpg",
      link: "#",
      description:
        "Explore how AI is shaping the future and the ethical challenges it brings.",
      author: {
        name: "John",
        avatar: "/images/home3.jpg",
      },
    },
    {
      title: "The Rise of Blockchain Technology: A Comprehensive Guide",
      date: "Sept 25, 2023",
      imageUrl: "/images/home16.jpg",
      link: "#",
      description:
        "A deep dive into blockchain and its impact on digital transformation.",
      author: {
        name: "Jane",
        avatar: "/images/home3.jpg",
      },
    },
    {
      title: "How Quantum Computing Will Revolutionize Data Security",
      date: "Sept 24, 2023",
      imageUrl: "/images/home8.jpg",
      link: "#",
      description:
        "Learn how quantum computing will change the way we secure digital information.",
      author: {
        name: "Michael",
        avatar: "/images/home3.jpg",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    hover: { scale: 1.03, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  return (
    <div className="w-full bg-gray-50  py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">
            From The Blog
          </h2>
          <p className="mt-2 text-lg leading-8 font-medium bg-gradient-to-r from-lime-700 to-lime-400 bg-clip-text text-transparent ">
            Dive into the latest in technology with our insightful blog posts.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={cn(
                "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl",
                "bg-gray-900 dark:bg-gray-700 px-6 py-6 pb-8 pt-64 sm:pt-40 lg:pt-64",
                "transition-all duration-300",
                "border border-gray-800/20 dark:border-gray-900/50",
                "shadow-md hover:shadow-lg"
              )}
            >
              <div className="w-full md:h-34">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-2xl"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 to-transparent rounded-t-2xl"></div>

              <div className="flex flex-wrap items-center gap-y-2 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-center gap-x-1 mr-4">
                  <Calendar className="h-4 w-4 relative block text-gray-400" />
                  <time className="relative block" dateTime={post.date}>
                    {post.date}
                  </time>
                </div>
                <div className="flex items-center gap-x-2">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                  />
                  <span className="flex gap-x-0.5 items-center">
                    <User className="h-4 w-4 relative block text-gray-400" />
                    {post.author.name}
                  </span>
                </div>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:underline">
                <Link href={post.link} className="relative block">
                  {post.title}
                </Link>
              </h3>

              <p className="mt-2 relative block text-sm text-white">
                {post.description}
              </p>

              <div className="mt-4 relative block ">
                <Link
                  href={post.link}
                  className="text-sm font-medium  text-white/90 flex items-center gap-2 transition-colors hover:text-white"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;
