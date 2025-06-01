import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{username}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">{phone}</p>
      <p className="text-sm text-blue-500">{website}</p>
      <p className="text-sm text-gray-500">Street: {address.street}</p>
      <p className="text-sm italic mt-2">{company.name}</p>
      <p className="text-sm italic text-gray-600">"{company.catchPhrase}"</p>
    </div>
  );
};

export default UserCard;
