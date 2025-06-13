import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaHandsHelping, FaGlobeAsia, FaSmile, FaPhoneAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Page = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* Hero Carousel */}
      <section className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          <div>
            <img src="/images/slide1.jpg" alt="Slide 1" className="h-[80vh] object-cover w-full" />
            <p className="legend">Empowering Rural Lives</p>
          </div>
          <div>
            <img src="/images/slide2.jpg" alt="Slide 2" className="h-[80vh] object-cover w-full" />
            <p className="legend">Education for Everyone</p>
          </div>
          <div>
            <img src="/images/slide3.jpg" alt="Slide 3" className="h-[80vh] object-cover w-full" />
            <p className="legend">Hope and Health</p>
          </div>
        </Carousel>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Vishoka Foundation</h1>
          <p className="mt-4 text-lg md:text-2xl drop-shadow-md">Together, we create smiles.</p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-bold hover:bg-indigo-100">Donate</button>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300">Volunteer</button>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-500">Partner</button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          To eliminate suffering and create a society where everyone has access to education, food, and dignity.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <FaHandsHelping className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">5,000+ Lives Touched</h3>
            <p>Through education, food, and support programs.</p>
          </div>
          <div>
            <FaGlobeAsia className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">12+ States Covered</h3>
            <p>Expanding reach with dedicated volunteers.</p>
          </div>
          <div>
            <FaSmile className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">100+ Initiatives</h3>
            <p>Improving lives every day, one smile at a time.</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Programs We Run</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📚 Education</h3>
            <p>School kits, tuition, and digital learning for underprivileged children.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🍛 Nutrition</h3>
            <p>Ration distribution and food camps in rural & disaster zones.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🩺 Healthcare</h3>
            <p>Free checkups, menstrual hygiene awareness, and wellness drives.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="mb-6">Every action counts. Be part of something bigger.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-bold hover:bg-indigo-100">Donate</button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-300">Volunteer</button>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-500">Partner</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Vishoka Foundation</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <FaPhoneAlt />
          <p>+91 9876543210 | contact@vishoka.org</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
