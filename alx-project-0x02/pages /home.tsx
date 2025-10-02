import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

function Home() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };
  return (
    <main>
      <h1>Homepage</h1>
      <Header />
      <Card
        title="ALX Software Engineering"
        content="This is week 5 of alx software engineering course"
      />
      <Card
        title="How To Code"
        content="The best way to be pro at coding is to code"
      />

      <div className="p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Add Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <div className="mt-6 space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default Home;
