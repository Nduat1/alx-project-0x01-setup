import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users = ({ posts }: { posts: UserProps[] }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">User List</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((user, idx) => <UserCard key={idx} {...user} />)}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return { props: { posts } };
}

export default Users;
