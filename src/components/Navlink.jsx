import Link from "next/link";
import { usePathname } from "next/navigation";

 

const Navlink = ({href,children}) => {
    const path = usePathname();
     const isActive = path===href
    return (
        
        <Link href={href} className={`${isActive ? " text-[#0059BB] font-medium  md:border-b-2 border-b-[#0059BB]":" "}`} >{children}</Link>
    );
};

export default Navlink;