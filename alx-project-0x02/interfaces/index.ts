export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}
export interface PostProps {
  title: string;
  content: string;
  id: number;
}
export interface UseProps {
  id: number;
  name: string;
  email: string;
  address: string;
}
