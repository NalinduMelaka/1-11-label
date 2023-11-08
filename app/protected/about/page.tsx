
import Contract from "@/components/Contract";
import Navbar from "@/components/Navbar";

const Page = () => {

  return (
  <div className="h-full">
    <div className="h-[9vh]">
    <Navbar />
    </div>
     <main className="grid grid-cols-1 grid-rows-4  bg-[#EEE0C9] h-[91vh]">
     <div className='overflow-auto'>
      <Contract />
     </div>
     <div>2</div>
     <div>3</div>
     <div>4</div>
     </main>
    </div>
  );
}

export default Page