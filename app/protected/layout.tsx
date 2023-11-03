 import Navbar from "@/components/Navbar";
 import Sidebar from "@/components/Sidebar";
 import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
 const DashbordLayout = async({
  children
}:{
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);
  if(!session || !session.user?.email){
    return(
      <div className="h-screen flex justify-center items-center">
        <p className="text-red-500 text-3xl">You don&apos;t have access to this page! Please sign in.</p>
      </div>
    )
  }
  return (
      <div>
        <Navbar />
        {children}
      </div>
  );
}

export default DashbordLayout;