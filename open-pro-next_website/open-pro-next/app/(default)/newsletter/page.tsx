"use client"; // Mark this file as a Client Component


import { useState } from 'react';
import PageIllustration from '@/components/page-illustration';
import Image from 'next/image';
import AvatarImg01 from '@/public/images/avatar-group-01.jpg';
import AvatarImg02 from '@/public/images/avatar-group-02.jpg';
import AvatarImg03 from '@/public/images/avatar-group-03.jpg';
import AvatarImg04 from '@/public/images/avatar-group-04.jpg';
import FooterSeparator from '@/components/footer-separator';

export default function Newsletter() {
  // State for email input and messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Send email to the API route
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear the input field
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <div className="mb-3 inline-flex">
                <div className="relative flex items-center gap-2 rounded-full bg-gray-900/90 p-1 pr-3 text-sm text-indigo-200/65">
                  <div className="-ml-0.5 flex -space-x-2">
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg01}
                      width={20}
                      height={20}
                      alt="Avatar 01"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg02}
                      width={20}
                      height={20}
                      alt="Avatar 02"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg03}
                      width={20}
                      height={20}
                      alt="Avatar 03"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg04}
                      width={20}
                      height={20}
                      alt="Avatar 04"
                    />
                  </div>
                  <span>
                    <strong className="font-normal text-gray-200">123</strong>{' '}
                    have already subscribed.
                  </span>
                </div>
              </div>
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Join the Wulo Waitlist
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  Unlock the future of legal work. Wulo is the AI-powered legal
                  copilot that helps you tackle research, document review, and
                  workflow management with ease. Be among the first to
                  experience faster, smarter, and more efficient legal practice.
                  Don’t miss out—sign up now to get early access!
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-[440px]">
              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email address"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  required
                />
                <button
                  type="submit"
                  className="btn group w-full flex-1 bg-gradient-to-t from-indigo-600 to-indigo-500"
                >
                  <span className="relative inline-flex items-center">
                    Subscribe
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </form>
            {/* Display success or error message */}
            {message && <p className="mt-5 text-center text-sm text-gray-600">{message}</p>}
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
