import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './carousel.css';

export const Carousel = ({ slides }) => {
    const [currentStep, setCurrentStep ]= React.useState(0);

    const handleNextClick = () => {
        const step = currentStep === (slides.length-1) ? 0 : (currentStep +1);
        setCurrentStep(step);
    }

    const handlePrevClick = () => {
       const step = currentStep === 0 ? slides.length-1 : (currentStep-1);

       setCurrentStep(step)
    }

    return (
        <div className='container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handleNextClick}></BsArrowLeftCircleFill>
            {slides.map((slide, idx) => {
                console.log('idx', idx);
                return (
                    <img className= {`slide ${currentStep === idx ? '' : 'hidden'}`} key={idx} src={slide.src} alt={slide.alt}/>
                )
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={handlePrevClick}></BsArrowRightCircleFill>
            <div className='indicators'>
                {slides.map((_, idx) => {
                    return (
                        <button key={idx} onClick={() => setCurrentStep(idx)} className={`indicator ${currentStep===idx ? '': 'inactive'}`}></button>
                    )
                })}
            </div>
        </div>
    )
};