"use client"
import Link from "next/link";
import { useState } from 'react';
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    // Here you would typically send this data to your backend
    console.log('Demo requested:', { email, message });
    
    // Close the form after submission
    setShowDemoForm(false);
    // You might want to show a success message here
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              AI-powered tools for legal teams
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Wulo transforms how legal departments work, simplifying complex workflows and scaling effortlessly. Set it up once and see faster, smarter, and more impactful results—every time.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://chat.wulo.ai/auth/login?next=%2Fchat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                    Sign Up for Early Access
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    href="/contact"
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>

        {/* Demo Request Modal */}
        {showDemoForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-xl">
              <div className="mb-4 flex justify-between">
                <h2 className="text-xl font-semibold text-white">Schedule a Demo</h2>
                <button
                  onClick={() => setShowDemoForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                    rows={4}
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}