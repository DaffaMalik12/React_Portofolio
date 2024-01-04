'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function ComponentsNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src="/img/typography.jpeg" className="rounded-full mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Muhammad Daffa</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Muhammad Daffa</span>
            <span className="block truncate text-sm font-medium">dmalikakram@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ComponentsNavbar;