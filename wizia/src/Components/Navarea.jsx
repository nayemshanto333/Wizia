// import { Navbar, NavbarBrand, NavbarContent, NavbarItem , NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from '@nextui-org/react';
// import React from 'react';

// const Navarea = () => {
//   return (
//     <Navbar>

//     </Navbar>
//   );
// }

// export default Navarea;

import { Navbar, NavbarBrand, NavbarContent, NavbarItem , NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from '@nextui-org/react';
import React from 'react';

export default function Navarea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent text-white  w-full mx-auto border-b "
      
    >
      <NavbarContent>
        <NavbarBrand>
          <img src="Logo.png" alt="" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="white" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="white">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="white" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="white" href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem className="space-x-3">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="shadow"
            radius="full"
            className="text-[#002228] font-semibold text-md "
           
          >
            Book a Demo
          </Button>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            radius="full"
            className="text-[#ffffff] font-semibold text-md "
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-[#fff]" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarContent justify="start" className="flex flex-col md:hidden">
          <NavbarItem className="space-x-3 mt-5">
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="shadow"
              radius="full"
              className="text-[#002228] font-semibold text-md hover:"
            >
              Book a Demo
            </Button>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="bordered"
              radius="full"
              className="text-[#fff] font-semibold text-md hover:"
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
}
