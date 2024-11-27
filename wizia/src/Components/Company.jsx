import React from 'react';

const Company = () => {

    const partners = [
        {img:"backhub.png"},
        {img:"CableLabs.png"},
        {img:"DBS.png"},
        {img:"EasyEuro.png"},
        {img:"AMD.png"},
    ]
  return (
    <section className='bg-[#07292F]  py-6  lg:py-10  '>
      <div className='w-10/12 mx-auto  '>
        <h1 className='text-center font-bold text-[#0FF1F6] uppercase mb-5 '>our trusted partners</h1>
        <div className='flex flex-wrap gap-5 justify-center items-center '>
            {partners.map((item, i)=>(
                <div key={i} className='text-white w-24'><img src={item.img} alt="" /></div>
            ))}

        </div>
      </div>
    </section>
  );
}

export default Company;
