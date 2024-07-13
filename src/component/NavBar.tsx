import { Button } from "./Button";
import { NavItem } from "./NavItem";

export function NavBar() {
    return (
        <nav className=" flex justify-around items-center font-gotu">
            <div className="rounded-full bg-white">
                <img className="" src="logo.svg" alt="" />
            </div>
            <div className="flex gap-5">
                <NavItem title="Home" />
                <NavItem title='About Us' />
                <NavItem title='Testimonials' />
                <NavItem title='Contact Us' />
            </div>
            <Button href="https://github.com/between27/amena-webpage1" title="Github" bgColor="bg-white" textColor="text-black" />
        </nav>
    )
}

