"use client"
import logo from "@/assets/logo.png"
import Image from "next/image";
const Navbar = () => {
    return (
        <div className={"w-full h-[60px] "}>
            <div className="h-full ">
                <Image src={logo} alt="logo" width={200} height={200} />
            </div>
        </div>
    );
};

export default Navbar;