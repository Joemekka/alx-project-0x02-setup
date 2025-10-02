import { UseProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UseProps) => {
  return (
    <div>
      <p>
        <strong>{name}</strong>
        <hr />
        <strong>{email}</strong>
        <hr />
        <strong>{address}</strong>
      </p>
    </div>
  );
};
export default UserCard;
