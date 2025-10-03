import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getStaticProps = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: PostProps[] = await res.json();
      console.log(data);
      setPosts(data.slice(0, 10)); // show only first 10 posts

      return {
        props: { posts },
        revalidate: 10,
      };
    };
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Posts:</h1>
      {posts.map((post) => (
        <PostCard
          key={post.userId}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default Posts;
