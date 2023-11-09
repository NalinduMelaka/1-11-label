
import Care from "@/components/Care";
import Contract from "@/components/Contract";
import Navbar from "@/components/Navbar";

const Page = () => {

  return (
  <div className="h-full">
    <div className="h-[9vh]">
    <Navbar />
    </div>
     <main className="grid grid-cols-1 grid-rows-4  bg-[#EEE0C9] h-[91vh]">
     <div className='flex  h-28 border-8 bg-slate-200  border-white rounded-sm m-1 overflow-auto'>
      <Contract />
     </div>
     <div className='flex  h-28 border-8 bg-slate-200  border-white rounded-sm m-1 overflow-auto'>
      <Care />
     </div>
     <div>3</div>
     <div>4</div>
     </main>
    </div>
  );
}

export default Page