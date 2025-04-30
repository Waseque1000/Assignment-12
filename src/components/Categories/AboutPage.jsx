import React from "react";
import {
  Users,
  Compass,
  Globe,
  Heart,
  Plane,
  Map,
  MessageCircle,
  Calendar,
  Star,
  ShieldCheck,
} from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Image/Banner */}
      <div className="relative">
        <div className="h-96 bg-gradient-to-r from-emerald-500 to-teal-600 w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe size={120} className="text-white opacity-20" />
          </div>
          <div className="text-center text-white relative z-10 px-4">
            <h1 className="text-5xl font-bold mb-4">Our Journey</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the passion and people behind Wanderlust Tours
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 text-center">
        <Compass size={48} className="mx-auto text-teal-600 mb-6" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          At Wanderlust Tours, we believe travel has the power to transform
          lives. Our mission is to create immersive, authentic experiences that
          connect travelers with the heart and soul of each destination, while
          fostering cultural understanding and environmental stewardship.
        </p>
      </div>

      {/* Our Story - Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-16">
            Our Story
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-500"></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* 2010 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-teal-500 text-white text-xl font-bold py-2 px-6 rounded-full z-10">
                    2010
                  </div>
                </div>
                <div className="mt-6 md:flex">
                  <div className="md:w-1/2 pr-8 md:text-right mb-8 md:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      The Beginning
                    </h3>
                    <p className="text-gray-600">
                      Founded by three friends with a shared passion for travel,
                      Wanderlust Tours began offering specialized experiences in
                      Southeast Asia.
                    </p>
                  </div>
                  <div className="md:w-1/2 pl-8">
                    <div className="aspect-w-16 aspect-h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Plane size={48} className="text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-teal-500 text-white text-xl font-bold py-2 px-6 rounded-full z-10">
                    2015
                  </div>
                </div>
                <div className="mt-6 md:flex flex-row-reverse">
                  <div className="md:w-1/2 pl-8 md:text-left mb-8 md:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Global Expansion
                    </h3>
                    <p className="text-gray-600">
                      After five successful years, we expanded our offerings to
                      include tours across Europe, Africa, and South America,
                      tripling our team size.
                    </p>
                  </div>
                  <div className="md:w-1/2 pr-8">
                    <div className="aspect-w-16 aspect-h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Globe size={48} className="text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-teal-500 text-white text-xl font-bold py-2 px-6 rounded-full z-10">
                    2020
                  </div>
                </div>
                <div className="mt-6 md:flex">
                  <div className="md:w-1/2 pr-8 md:text-right mb-8 md:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Sustainability Pledge
                    </h3>
                    <p className="text-gray-600">
                      We launched our comprehensive sustainability initiative,
                      committing to carbon-neutral operations and partnering
                      with local conservation efforts worldwide.
                    </p>
                  </div>
                  <div className="md:w-1/2 pl-8">
                    <div className="aspect-w-16 aspect-h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Heart size={48} className="text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-teal-500 text-white text-xl font-bold py-2 px-6 rounded-full z-10">
                    Today
                  </div>
                </div>
                <div className="mt-6 md:flex flex-row-reverse">
                  <div className="md:w-1/2 pl-8 md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      Looking Forward
                    </h3>
                    <p className="text-gray-600">
                      With operations on all seven continents and thousands of
                      satisfied travelers, we continue to innovate and create
                      extraordinary journeys that inspire and transform.
                    </p>
                  </div>
                  <div className="md:w-1/2 pr-8">
                    <div className="aspect-w-16 aspect-h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Map size={48} className="text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-16">
          Why Choose Wanderlust
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Star size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expertise
            </h3>
            <p className="text-gray-600">
              Our guides are certified experts with deep local knowledge and
              passion for sharing authentic experiences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Safety First
            </h3>
            <p className="text-gray-600">
              Your wellbeing is our priority with comprehensive safety protocols
              and 24/7 support during your journey.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Calendar size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flexibility
            </h3>
            <p className="text-gray-600">
              We offer customizable itineraries and flexible booking policies to
              accommodate your unique travel needs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Heart size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600">
              Every tour is designed with environmental and cultural
              responsibility at its core.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-16">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/XZ3jp2q/20220710-180303-01.jpg"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Waseque Arafat
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  Founder & CEO
                </p>
                <p className="text-gray-600">
                  A lifelong adventurer with experience in over 90 countries,
                  Elena founded Wanderlust Tours to share her passion for
                  authentic travel.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/XZ3jp2q/20220710-180303-01.jpg"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Marcus Chen
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  Head of Operations
                </p>
                <p className="text-gray-600">
                  With a background in hospitality management, Marcus ensures
                  every logistical detail of your trip runs smoothly.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/XZ3jp2q/20220710-180303-01.jpg"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Sophia Patel
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  Experience Designer
                </p>
                <p className="text-gray-600">
                  Combining her love for cultural anthropology and travel,
                  Sophia crafts unique itineraries that go beyond typical
                  tourist experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-16">
          What Our Travelers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Users size={24} className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sarah Thompson</h4>
                <p className="text-gray-500">Thailand Adventure Tour</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Our Thailand tour exceeded all expectations. The local
              experiences Wanderlust arranged gave us insights we never would
              have discovered on our own. Truly life-changing!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Users size={24} className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">James Rodriguez</h4>
                <p className="text-gray-500">European Capitals Tour</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The attention to detail was remarkable. From hidden local
              restaurants to skip-the-line museum access, Wanderlust thought of
              everything to make our European tour special."
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8">
            Contact our travel experts today and start planning your
            unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <MessageCircle size={20} className="mr-2" />
              Contact Us
            </a>
            <a
              href="/tours"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition duration-300"
            >
              <Compass size={20} className="mr-2" />
              Explore Our Tours
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
