import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // Get session on the server
  const session = await getServerSession(authOptions);

  return <div>Hello {session && <span>{session.user!.name}</span>}</div>;
}
