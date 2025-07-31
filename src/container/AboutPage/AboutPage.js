import React from 'react'
import { SubHeading } from '../../components';
import { images } from '../../constants';
import Feature from '../Feature/Features';
import Laurels from '../Laurels/Laurels';
const AboutPage = () => {
  return (
    <>
       <div className=" app__bg app__wrapper md:pt-44 pt-32 md:pb-16 pb-12 md:px-24 px-4">
          <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.about} alt="chef_image" className='md:h-[700px] h-[400px] object-cover' />
          </div>
          <div className="app__wrapper_info flex justify-start items-start">
            <SubHeading title="Our Story"/>
            <h1 className="headtext__cormorant text-[#DB790A] ">Crafted with Flavor, Served with Love</h1>
      
            <div className="app__chef-content flex flex-col w-full mt-10">
              <div className="app__chef-content_quote  flex justify-start items-end">
                <img src={images.quote} alt="quote_image" className='w-[47px] text-orange-500  h-[40px] mt-0 mr-4 mb-4 ml-0'/>
                <p className="text-white p__opensans">Every sip and bite at Rainbow is a burst of happiness.</p>
              </div>
              <p className= "text-white p__opensans"> At Rainbow Juice and Snacks Center, we believe that great food doesn’t have to be complicated—it just has to be made with heart. From zesty street-style snacks to fresh, wholesome juices, everything we serve is carefully crafted to bring joy, flavor, and a splash of color to your day.
      
      Located at the heart of the city, we’ve become a go-to spot for students, families, and foodies who crave affordable yet delicious options. Whether you're grabbing a quick bite, chilling with friends, or exploring something new—Rainbow is where taste meets tradition, and freshness is always on the menu. </p>
            </div>
       <button type="button" className="custom__button  mt-4 bg-white text-[orange] font-bold  rounded-full hover:bg-[orange] hover-text-white">
                        Know More
                      </button>
           
          </div>
        </div>

<Feature/>

<Laurels/>

    </>
  )
}

export default AboutPage
