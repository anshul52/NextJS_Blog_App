import Nav from "@/components/Nav";
import Blogs from "@/components/Home/Blogs";
export const metadata = {
  title: " Welcome to Bloggy Blog App !",
  description:
    "Welcome to my awesome blog where I share insightful articles on various topics including technology, coding, and development.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-8">
      <Nav />
      <Blogs />
    </main>
  );
}
