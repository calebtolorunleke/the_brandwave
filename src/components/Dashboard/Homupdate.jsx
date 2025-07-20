import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.svg";
import headImg from "../images/homeImg.jpg";
import secImg from "../images/homeImg2.jpg";
import simg from "../images/sImg.jpg";
import roundimg from "../images/test1.jpeg";
import FirstFooter from "../GetStarted/FirstFooter";
import Testimonials from "../GetStarted/Testimonials";

const Homupdate = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const images = [headImg, secImg];

  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Auto-scroll horizontal container
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let requestId;

    const step = () => {
      if (!scrollContainer) return;

      scrollAmount += 1; // scroll speed in px per frame
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0; // reset scroll to start
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <main className="max-w-[1300px] mx-auto md:px-12">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[40rem] overflow-hidden transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Header */}
        <header className="relative z-10 px-4 flex justify-between items-center text-white py-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brandwave logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold">Brandwave</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li className="hover:text-gray-300 cursor-pointer">Features</li>
              <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
          </nav>

          <a
            href="/signup"
            className="hidden md:block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium transition"
          >
            Launch my Brand
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </header>

        {menuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black/80 text-white z-20 px-6 py-4 space-y-4 text-sm font-medium">
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Features</li>
              <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
            <a
              href="/signup"
              className="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Launch my Brand
            </a>
          </div>
        )}

        <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center text-white h-full max-w-2xl mx-auto gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make Waves with Your Brand
          </h1>
          <p className="text-lg md:text-xl">
            Launch your products, showcase your story, and ride the wave to
            global recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
            >
              Get Started
            </a>
            <a
              href="/signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium"
            >
              Try for Free
            </a>
          </div>
          <p className="text-sm text-gray-200">
            No credit card required. Set-up in under 5 minutes.
          </p>
        </div>
      </div>

      {/* Scrollable Brand Profile Sections */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-10 snap-x snap-mandatory scroll-smooth max-w-screen h-full"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Section 1 */}
        <div className="min-w-[100vw] snap-start shrink-0">
          <div className="bg-[#99A6AF] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 w-screen h-full">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div className="rounded bg-[#C8C9CA] p-6 space-y-4 shadow-md">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={roundimg}
                    className="w-12 h-12 rounded-full"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Createx Inc.</span>
                    <span className="text-sm text-gray-700">
                      Fashion Designer
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-800">
                  Cretex Inc. is a contemporary fashion brand redefining African
                  style through innovative tailoring, modern cuts, and timeless
                  elegance.
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-3 py-6 px-4 bg-[#C8C9CA] rounded shadow-sm">
                  <h2 className="font-bold text-lg">Design Services</h2>
                  <p className="text-sm">
                    Custom Tailoring (Men & Women) <br />
                    Ready-to-Wear Sales <br />
                    Bridal & Eventwear <br />
                    Creative Styling & Consultation <br />
                    Fashion Design for Film/Stage
                  </p>
                  <span className="underline text-sm text-blue-800 cursor-pointer">
                    Book a Styling Session
                  </span>
                </div>
                <div className="h-full">
                  <img
                    src={simg}
                    className="w-full h-full object-cover rounded"
                    alt="Design Sample"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 justify-center items-start px-4 md:px-8">
              <h1 className="font-bold text-4xl text-white leading-tight">
                Build a Brand Page That Speaks for You
              </h1>
              <p className="text-white text-base">
                Brandwave makes it easy to build a standout presence. Upload
                your assets, choose a layout, and go live – no code, no hassle.
              </p>
              <a
                href="/signup"
                className="text-white bg-[#1E88E5] px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="min-w-[100vw] snap-start shrink-0">
          <div className="bg-[#99A6AF] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 w-screen h-full">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div className="rounded bg-[#C8C9CA] p-6 space-y-4 shadow-md">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={roundimg}
                    className="w-12 h-12 rounded-full"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Elegance Couture</span>
                    <span className="text-sm text-gray-700">
                      Luxury Designer
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-800">
                  Elegance Couture fuses tradition with luxury to deliver
                  high-end garments tailored to perfection.
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-3 py-6 px-4 bg-[#C8C9CA] rounded shadow-sm">
                  <h2 className="font-bold text-lg">Services</h2>
                  <p className="text-sm">
                    Red Carpet Styling <br />
                    Editorial Fashion <br />
                    Custom Accessories <br />
                    Premium Fabric Curation
                  </p>
                  <span className="underline text-sm text-blue-800 cursor-pointer">
                    Book a Session
                  </span>
                </div>
                <div className="h-full">
                  <img
                    src={headImg}
                    className="w-full h-full object-cover rounded"
                    alt="Lookbook"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 justify-center items-start px-4 md:px-8">
              <h1 className="font-bold text-4xl text-white leading-tight">
                Tell Your Fashion Story
              </h1>
              <p className="text-white text-base">
                Your brand deserves a platform that reflects its essence. Share
                your creativity and connect with your audience instantly.
              </p>
              <button className="text-white bg-[#1E88E5] px-6 py-3 rounded hover:bg-blue-700 transition">
                Launch Now
              </button>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="min-w-[100vw] snap-start shrink-0">
          <div className="bg-[#99A6AF] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 w-screen h-full">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div className="rounded bg-[#C8C9CA] p-6 space-y-4 shadow-md">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={roundimg}
                    className="w-12 h-12 rounded-full"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Urban Stitch</span>
                    <span className="text-sm text-gray-700">
                      Streetwear Brand
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-800">
                  Urban Stitch is a youth-centric brand merging street culture
                  with bold designs to make a statement.
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-3 py-6 px-4 bg-[#C8C9CA] rounded shadow-sm">
                  <h2 className="font-bold text-lg">Offerings</h2>
                  <p className="text-sm">
                    Urban Apparel <br />
                    Lookbook Shoots <br />
                    Social Media Strategy <br />
                    Custom Street Collabs
                  </p>
                  <span className="underline text-sm text-blue-800 cursor-pointer">
                    Let’s Collaborate
                  </span>
                </div>
                <div className="h-full">
                  <img
                    src={secImg}
                    className="w-full h-full object-cover rounded"
                    alt="Street Fashion"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 justify-center items-start px-4 md:px-8">
              <h1 className="font-bold text-4xl text-white leading-tight">
                Represent Your Roots
              </h1>
              <p className="text-white text-base">
                Whether classic or edgy, Brandwave helps you bring your story to
                life through a custom profile that’s uniquely yours.
              </p>
              <button className="text-white bg-[#1E88E5] px-6 py-3 rounded hover:bg-blue-700 transition">
                Join Us
              </button>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="min-w-[100vw] snap-start shrink-0">
          <div className="bg-[#99A6AF] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 w-screen h-full">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div className="rounded bg-[#C8C9CA] p-6 space-y-4 shadow-md">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={roundimg}
                    className="w-12 h-12 rounded-full"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Vintage Vogue</span>
                    <span className="text-sm text-gray-700">Retro Fashion</span>
                  </div>
                </div>
                <p className="text-sm text-gray-800">
                  Vintage Vogue revives classic styles with a modern twist,
                  perfect for the bold and nostalgic.
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-3 py-6 px-4 bg-[#C8C9CA] rounded shadow-sm">
                  <h2 className="font-bold text-lg">Specialties</h2>
                  <p className="text-sm">
                    Retro Styling <br />
                    Vintage Sales <br />
                    Costume Rentals <br />
                    Throwback Campaigns
                  </p>
                  <span className="underline text-sm text-blue-800 cursor-pointer">
                    Book a Session
                  </span>
                </div>
                <div className="h-full">
                  <img
                    src={headImg}
                    className="w-full h-full object-cover rounded"
                    alt="Retro Style"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 justify-center items-start px-4 md:px-8">
              <h1 className="font-bold text-4xl text-white leading-tight">
                Style That Tells Time
              </h1>
              <p className="text-white text-base">
                Showcase the legacy of your brand and its evolution with a page
                that's as unique as your journey.
              </p>
              <button className="text-white bg-[#1E88E5] px-6 py-3 rounded hover:bg-blue-700 transition">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <FirstFooter /> */}
      <Testimonials />

      <footer className="bg-blue-900 text-white px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-1 flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="Brandwave logo" className="h-6 w-auto" />
              <span className="text-xl font-semibold">Brandwave</span>
            </div>
            <p className="text-sm text-gray-200 max-w-xs">
              Collaboration platform for modern teams.
            </p>
          </div>

          <div>
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">Company</h5>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>Product</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">Features</h5>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>Screen sharing</li>
              <li>iOS & Android Apps</li>
              <li>File Sharing User Management</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">
              Contact Us
            </h5>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>info@brandwave.com</li>
              <li>1-800-200-300</li>
              <li>1010 Sunset Blv.</li>
              <li>Pali Alto, California</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">
              Stay ahead with branding tips
            </h5>
            <p className="text-sm text-gray-200 mb-4">
              Subscribe to our newsletter
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 bg-gray-400 py-2 rounded text-black focus:outline-none"
              />
              <button className="bg-[#5468E7] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homupdate;
