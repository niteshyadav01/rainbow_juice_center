import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div className="mb-4 flex items-center justify-center gap-3">
    <img
      src={images.spoon}
      alt="spoon_image"
      className="w-6 h-auto"
    />
    <p className="m-0 font-CormorantUpright text-white capitalize leading-7 text-base font-bold tracking-wider">
      {title}
    </p>
  </div>
);

export default SubHeading;
