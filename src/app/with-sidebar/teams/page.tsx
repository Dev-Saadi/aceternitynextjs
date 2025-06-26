"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, X, Mail } from "lucide-react";
<X />;

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
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
    <section className="py-20 px-4 bg-gradient-to-tr from-slate-100 via-white to-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Our business-focused team is dedicated to powering seamless,
            innovative internet services for the modern world.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
          >
            Join Our Team →
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden max-w-xs mx-auto"
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center rounded-t-2xl"
                />
              </div>

              <div className="p-2 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs text-blue-600 mb-1">{member.title}</p>
                <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                  {member.bio}
                </p>
                <p className="text-[10px] text-gray-500 flex-grow line-clamp-3">
                  {member.description}
                </p>
                <div className="mt-3 flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <X className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <Mail className="w-4 h-4" />
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
