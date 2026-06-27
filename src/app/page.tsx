"use client";

import { useEffect, useState } from "react";

const greetings = ["Здравствуйте.", "Hello.", "Γεια σας."];

export default function Home() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsVisible(false);
      window.setTimeout(() => {
        setGreetingIndex((current) => (current + 1) % greetings.length);
        setIsVisible(true);
      }, 350);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10 xl:px-12">
        <header className="flex items-center justify-between rounded-full border border-stone-200/80 bg-white/70 px-4 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur sm:px-6">
          <a href="#" className="text-sm font-semibold tracking-[0.35em] text-stone-900 uppercase">
            Russian Studio
          </a>

          <nav className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <a href="#about" className="transition hover:text-stone-900">
              About
            </a>
            <a href="#lessons" className="transition hover:text-stone-900">
              Lessons
            </a>
            <a href="#resources" className="transition hover:text-stone-900">
              Resources
            </a>
            <a href="#contact" className="transition hover:text-stone-900">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-stone-900/10 bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Book a lesson
          </a>
        </header>

        <main className="flex flex-1 items-center py-10 sm:py-16 lg:py-20">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <section className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-stone-300/80 bg-white/80 px-3 py-1 text-sm text-stone-600 shadow-sm">
                <span className="mr-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                Personalized learning for real life
              </div>

              <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-stone-900 sm:text-5xl lg:text-7xl">
                Learn Russian with confidence.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
                Personal online Russian lessons for adults who want to speak
                naturally for life, work, travel and relationships.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-stone-900 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-stone-800"
                >
                  Book your first lesson
                </a>
                <a
                  href="#resources"
                  className="rounded-full border border-stone-300 bg-white/80 px-6 py-3.5 text-center text-sm font-medium text-stone-700 transition hover:border-stone-900/20 hover:bg-stone-50"
                >
                  Explore Language Lab
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm tracking-[0.24em] text-stone-500 uppercase">
                <span className="h-px w-10 bg-stone-300" />
                <span
                  className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                  {greetings[greetingIndex]}
                </span>
              </div>
            </section>

            <section className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(135deg,#fdf7ee_0%,#f5e8d8_45%,#efe0c6_100%)] p-6 shadow-[0_30px_80px_rgba(77,60,39,0.16)] sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_transparent_45%)]" />
                <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-amber-200/70 blur-3xl" />
                <div className="absolute bottom-16 right-8 h-32 w-32 rounded-full bg-rose-200/70 blur-3xl" />
                <div className="absolute left-[14%] top-[18%] h-40 w-40 rotate-12 rounded-[2.2rem] border border-white/70 bg-white/50 backdrop-blur-xl" />
                <div className="absolute bottom-[18%] left-[10%] h-28 w-24 rotate-[-18deg] rounded-[1.6rem] border border-stone-900/10 bg-[#faf7f2]/90 shadow-lg" />
                <div className="absolute right-[10%] top-[10%] h-20 w-20 rounded-full border border-stone-900/10 bg-white/70" />
                <div className="absolute bottom-[18%] right-[14%] h-14 w-14 rotate-45 rounded-2xl border border-white/80 bg-white/60" />
                <div className="absolute inset-x-8 bottom-8 rounded-[1.6rem] border border-white/70 bg-white/70 px-5 py-4 backdrop-blur-xl">
                  <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">
                    Speak with ease
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    Breathe. Speak. Connect.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
