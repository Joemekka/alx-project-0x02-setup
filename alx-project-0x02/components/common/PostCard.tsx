import { PostProps } from "@/interfaces";

const PostCard = ({ title, content, id }: PostProps) => {
  return (
    <div className="border rounded p-4 mb-4 shadow">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-700">{content}</p>
      <h4 className="text-sm text-gray-500">User ID: {id}</h4>
    </div>
  );
};
export default PostCard;
