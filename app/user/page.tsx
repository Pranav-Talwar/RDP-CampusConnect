
import client from "@/db";
// Singleton pattern for PrismaClient to prevent multiple instances



async function fetchData() {
  const user = await client.user.findFirst();
  return {
    email: user?.email,
  };
}

export default async function User() {
  const data = await fetchData();

  return (
    <div>
      {data.email}  
    </div>
  );
}
