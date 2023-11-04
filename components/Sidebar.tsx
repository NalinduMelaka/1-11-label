import Link from "next/link"
import Image from "next/image"
import { LayoutDashboard, Component, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/protected/about',
    color: "text-sky-500"
  },
  {
    label: 'ArtWorks',
    icon: Component,
    href: '/protected/artwork',
    color: "text-violet-500",
  },
  {
    label: 'Input data',
    icon: FileText,
    color: "text-pink-700",
    href: '/protected/inputdata',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

const Sidebar = async() => {

  const session = await getServerSession(authOptions);
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href='/' className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold">IPFS</h1>
        </Link>
        
        <div className="space-y-1">
        {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className=
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
        
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
              ))}
           
          
        </div>
     
      </div>
      <div className="text-sm flex p-3 w-full justify-center items-end  font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
      {session && session.user?.email ? (
    <Link href='/auth/signout'>Sign out</Link>
     ) : (
    <Link href='/auth/signin'>Sign in</Link>
  )}
      </div>
    </div>
  )
}

export default Sidebar