import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#07292F] w-full '>
        <div className='flex justify-between items-center gap-4 max-w-[1400px] mx-auto px-2.5 sm:px-5 md:px-10 lg:px-20 xl:px-24 py-6'>
            <img src="Logo.png" alt="" />
            <p className='text-white text-xs sm:text-sm'>Copyright &copy; 2023 Wizia. All rights reserved.</p>
        </div>
      
    </footer>
  );
}

export default Footer;
