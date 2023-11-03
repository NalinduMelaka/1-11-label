import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './Sidebar';
const Mobilesidebar = () => {
  return (
    <Sheet>
      
       
          <SheetTrigger>
            <Menu  className='md:hidden'/>
          </SheetTrigger>
        
     
      <SheetContent side="left" className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default Mobilesidebar