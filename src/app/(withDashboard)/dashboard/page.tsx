import { getServerSession } from "next-auth/next"; // <== IMPORTANT
import { authOptions } from "@/utils/authOptions";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("SESSION:", session);

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name || "Guest"} To Dashboard Page
      </h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt="user image"
          width={80}
          height={80}
          className="rounded-full" 
        />
      )}
    </div>
  );
};

export default DashboardPage;
