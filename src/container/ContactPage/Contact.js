import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff8f1] to-[#fff0e1] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans pt-36">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#DB790A] mb-12 font-CormorantUpright">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT COLUMN: Contact Info */}
          <div className="bg-white shadow-xl rounded-3xl p-8 space-y-8 border border-orange-100">
            <div>
              <h3 className="text-2xl font-bold text-[#DB790A] mb-3">Visit Us</h3>
              <div className="flex gap-3">
                <FiMapPin className="text-[#DB790A] text-xl mt-1" />
                <p className="text-gray-800 leading-relaxed text-sm">
                  Cayenne, Chandivali Farm Rd,
                  <br />
                  Nahar Amrit Shakti, Powai,
                  <br />
                  Mumbai, Maharashtra 400072
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#DB790A] mb-3">Call Us</h3>
              <div className="space-y-2 text-sm text-gray-800">
                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#DB790A]" />
                  <a href="tel:+919769457656" className="hover:opacity-80 transition">
                    +91 97694 57656
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#DB790A]" />
                  <a href="tel:+919619430189" className="hover:opacity-80 transition">
                    +91 96194 30189
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#DB790A] mb-3">Email</h3>
              <div className="flex items-center gap-3 text-sm text-gray-800">
                <FiMail className="text-[#DB790A]" />
                <a href="mailto:info@rainbowjuice.in" className="hover:opacity-80 transition">
                  info@rainbowjuice.in
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <form
            className="bg-white shadow-xl rounded-3xl p-8 border border-orange-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-bold text-[#DB790A] mb-6">Send a Message</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#DB790A]/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#DB790A]/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#DB790A]/50"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DB790A] hover:bg-orange-600 transition text-white font-semibold py-2.5 rounded-xl shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-14 rounded-3xl overflow-hidden shadow-xl border border-orange-100">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2299035208327!2d72.88873477518393!3d19.139258082068104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c82d88e8c9%3A0xdeb95b6c2aa92af3!2sNahar%20Amrit%20Shakti%2C%20Chandivali!5e0!3m2!1sen!2sin!4v1719851031634!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
