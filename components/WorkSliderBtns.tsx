'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

// Define the prop types
interface WorkSliderBtnsProps {
  containerStyles: string; // Class names for the container
  btnStyles: string;       // Class names for the buttons
  iconsStyles: string;     // Class names for the icons
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ 
  containerStyles, 
  btnStyles, 
  iconsStyles 
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
