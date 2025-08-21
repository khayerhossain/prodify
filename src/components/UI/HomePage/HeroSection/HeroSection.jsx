"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

// Drop this component anywhere (e.g., in app/page.tsx)
// TailwindCSS required. Framer Motion + lucide-react recommended.

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950 via-black to-gray-900" />
      {/* Accent blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="uppercase tracking-wider">New</span>
              <span className="text-white/50">Clean & Modern UI</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Build beautiful experiences
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                for your next project
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A minimal, premium banner with crisp typography, soft shadows, and
              accessible contrast. Ready for e‑commerce, SaaS, or portfolios.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-5 py-3 font-medium text-white shadow-lg shadow-purple-600/25 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </a>
            </div>

            {/* Small trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Responsive
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                A11y‑friendly
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Dark first
              </span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-black p-4 shadow-inner">
                {/* Mock screenshot / banner art */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop"
                    alt="Product preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* floating card */}
                <div className="pointer-events-none absolute -right-3 -bottom-3 hidden translate-y-4 rounded-xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur md:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
                    <div>
                      <p className="text-sm font-medium text-white/90">
                        Lightning fast
                      </p>
                      <p className="text-xs text-white/60">
                        Optimized for Next.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
