
import getUserSesssion from "@/helpers/getUserSesssion";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Dashboard | Mayesha",
};
const DashboardHomePage = async () => {
  const session = await getUserSesssion()

if (!session) {
    redirect("/"); 
  }

  return (
    <div className="flex flex-col justify-center items-center h-dvh w-full">
      <h1 className="text-4xl font-bold pb-2">Welcome {session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;

