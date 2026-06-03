// src/components/Blog.tsx
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    slug: "why-fibre-beats-wireless",
    title: "Why Fibre Beats Wireless: A Nairobi Internet Buyer's Guide",
    excerpt:
      "Thinking about switching from 4G home internet? Here's exactly why fibre will transform your connectivity — and save you money long-term.",
    category: "Education",
    author: "James Mwangi",
    date: "May 28, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    accent: "#a3ff47",
  },
  {
    slug: "gaming-internet-kenya",
    title: "The Best Internet for Gaming in Kenya (2025 Guide)",
    excerpt:
      "Low latency matters more than raw speed for gaming. We break down why SwiftNet's <20ms ping makes all the difference for EA FC, Call of Duty, and more.",
    category: "Gaming",
    author: "Kevin Otieno",
    date: "May 15, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    accent: "#c084fc",
  },
  {
    slug: "work-from-home-nairobi",
    title: "Working from Home in Nairobi? Here's What Your Internet Needs",
    excerpt:
      "Video calls, cloud tools, and deadlines demand reliable internet. We've calculated exactly how much bandwidth you need — and how to never drop a call again.",
    category: "Work from Home",
    author: "Amina Hassan",
    date: "May 5, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    accent: "#60a5fa",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-400/20 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
              Insights
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white">
              From the Blog
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-volt-400 font-display font-600 text-sm hover:gap-3 transition-all"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="blog-card glass rounded-2xl overflow-hidden group hover:border-volt-400/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <span
                  className="absolute top-4 left-4 text-xs font-display font-700 px-3 py-1 rounded-full"
                  style={{
                    background: `${post.accent}20`,
                    color: post.accent,
                    border: `1px solid ${post.accent}30`,
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-700 text-white text-lg leading-snug mb-3 group-hover:text-volt-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm font-body leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-body border-t border-white/5 pt-4">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}