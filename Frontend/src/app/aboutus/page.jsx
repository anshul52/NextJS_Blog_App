import React from "react";
import Nav from "@/components/Nav";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pb-8">
        <Nav />
        <div className="w-full min-h-screen mx-auto px-24 py-12 bg-gray-50 text-gray-900">
          <section className="intro">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Welcome to Bloggy Blog!
            </h1>
            <p className="text-lg text-gray-700">
              At Bloggy, we believe in the power of words to inspire, educate,
              and connect people from all walks of life. Our mission is to share
              valuable insights, tips, and stories across various topics,
              including technology, lifestyle, business, and personal growth.
              Whether you're a curious reader, an aspiring developer, or someone
              looking for fresh ideas, you'll find something here that sparks
              your interest.
            </p>
          </section>

          <section className="our-story mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Bloggy was founded in 2020 with a simple idea: to create a space
              where knowledge is shared freely and where ideas can flourish.
              What started as a small passion project has since grown into a
              thriving community of readers and writers who are passionate about
              learning and growth.
            </p>
            <p className="text-lg text-gray-700">
              Our founder, John Doe, started this blog with the goal of making
              complex topics more accessible and helping others navigate the
              ever-changing world of technology. With years of experience in
              software development, John wanted to create content that
              simplifies concepts, offers expert advice, and sparks meaningful
              conversations.
            </p>
          </section>

          <section className="our-values mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Values
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>
                <strong className="font-semibold">Authenticity:</strong> We
                believe in delivering honest, transparent content that our
                readers can trust. We prioritize quality over quantity and
                always strive to provide accurate, insightful information.
              </li>
              <li>
                <strong className="font-semibold">Inclusivity:</strong> We aim
                to create a welcoming space for people from all backgrounds. Our
                content is designed to resonate with a diverse audience,
                ensuring everyone feels heard and valued.
              </li>
              <li>
                <strong className="font-semibold">Innovation:</strong> We are
                constantly exploring new ideas, technologies, and trends to keep
                our content fresh, engaging, and relevant in a fast-paced world.
              </li>
            </ul>
          </section>

          <section className="what-we-offer mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Bloggy, you can expect:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>
                <strong className="font-semibold">Expert Articles:</strong>{" "}
                In-depth pieces on a variety of topics written by experienced
                writers, industry professionals, and guest contributors.
              </li>
              <li>
                <strong className="font-semibold">Tips & Tutorials:</strong>{" "}
                Practical advice and step-by-step guides to help you improve
                your skills and knowledge in areas such as web development, AI,
                and software engineering.
              </li>
              <li>
                <strong className="font-semibold">Inspiration:</strong> Stories,
                personal experiences, and motivational content to inspire your
                personal and professional journey.
              </li>
              <li>
                <strong className="font-semibold">Community:</strong> A place to
                connect with like-minded individuals through comments,
                discussions, and shared experiences.
              </li>
            </ul>
          </section>

          <section className="meet-the-team mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <strong className="font-semibold">John Doe</strong> – Founder &
                Head Writer With a passion for technology and innovation, John
                is the creative force behind Bloggy. As a software developer
                with over 10 years of experience, he enjoys breaking down
                complex topics into easy-to-understand articles. When not
                writing, you can find John hiking or exploring new tech trends.
              </li>
              <li>
                <strong className="font-semibold">Jane Smith</strong> –
                Contributor & Content Strategist Jane is our expert in AI and
                machine learning, bringing a wealth of knowledge to our
                technical articles. She's passionate about simplifying
                artificial intelligence concepts and helping others understand
                the potential of these technologies.
              </li>
              <li>
                <strong className="font-semibold">Michael Brown</strong> –
                Editor & Social Media Manager Michael ensures that our content
                is polished and ready for publication. He also manages our
                social media presence, engaging with readers and spreading the
                word about the latest posts.
              </li>
            </ul>
          </section>

          <section className="why-follow-us mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Follow Us?
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>
                Stay updated with the latest trends and developments in
                technology.
              </li>
              <li>
                Learn new skills through actionable content and tutorials.
              </li>
              <li>
                Join a growing community of curious and passionate individuals.
              </li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Thank you for visiting Bloggy. We hope you find value in our
              content and become a part of our community!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
