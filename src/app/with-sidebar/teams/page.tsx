"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  /* same data as before */
  {
    name: "Alex Morgan",
    title: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in tech innovation.",
    image: "/images/Testimonial2.jpg",
    description:
      "A strong and decisive leader, Alex has charted a course of innovation for our company. Their strategic thinking and ability to inspire teams have been crucial to our success and growth in the industry.",
  },
  {
    name: "Sarah Johnson",
    title: "Chief Design Officer",
    bio: "Award-winning designer with a passion for creating beautiful, functional interfaces.",
    image: "/images/Testimonial1.jpg",
    description:
      "Sarah is an award-winning designer with a keen eye for detail. She crafts beautiful and intuitive user experiences. Her passion for design excellence is evident in every project.",
  },
  {
    name: "Michael Chen",
    title: "CTO",
    bio: "Tech genius with expertise in AI and machine learning technologies.",
    image: "/images/Testimonial5.jpg",
    description:
      "Michael leads our technological direction. His expertise in AI and machine learning drives us to the forefront of innovation.",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director",
    bio: "Creative strategist who excels at building and promoting brands.",
    image: "/images/Testimonial4.jpg",
    description:
      "Emily develops and executes innovative marketing campaigns that drive brand growth and audience engagement.",
  },
  {
    name: "David Wilson",
    title: "Lead Developer",
    bio: "Full-stack developer with a knack for solving complex problems.",
    image: "/images/Testimonial3.jpg",
    description:
      "David delivers robust and scalable solutions and is a key player in our development team.",
  },
  {
    name: "Sophia Lee",
    title: "UX Researcher",
    bio: "Human-centered designer focused on creating intuitive user experiences.",
    image: "/images/Testimonial8.jpg",
    description:
      "Sophia ensures our products are intuitive and user-friendly, driving high user satisfaction.",
  },
  {
    name: "James Taylor",
    title: "Product Manager",
    bio: "Strategic thinker who bridges the gap between business and technology.",
    image: "/images/Testimonial7.jpg",
    description:
      "James drives product vision and ensures alignment with market needs and business goals.",
  },
  {
    name: "Olivia Martinez",
    title: "Customer Success",
    bio: "Dedicated to ensuring our clients achieve their goals and succeed.",
    image: "/images/Testimonial6.jpg",
    description:
      "Olivia works tirelessly to support our clients and ensure their long-term success.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Header (Left Side) */}
        <div className="lg:w-1/3 flex flex-col">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet Our Management.
            </h2>
            <p className="text-gray-500 mt-4 text-base md:text-lg">
              We’re a passionate team focused on delivering meaningful results.
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className={cn(
              "inline-block px-8 py-3 rounded-full font-medium",
              "bg-gradient-to-r from-gray-600 to-gray-900",
              "hover:from-slate-500 hover:to-slate-300 shadow-lg hover:shadow-xl transition duration-500 ease-in-out "
            )}
          >
            Join Our Team →
          </motion.a>
        </div>

        {/* Cards (Right Side) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015 }}
              transition={{
                duration: 0.1,
                delay: index * 0.03,
                type: "tween",
                ease: "easeOut",
              }}
              className={cn(
                "group bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-md overflow-hidden",
                "hover:shadow-xl hover:border-indigo-500/50 transition-transform duration-300",
                "flex flex-col h-full"
              )}
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  width={400}
                  height={224}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-green-500 mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {member.bio}
                </p>
                <p className="text-xs text-gray-500 mb-4 line-clamp-3">
                  {member.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
