import React from 'react'
import HeroImage from'../../assets/image1.jpg'

const Hero = () => {
  return (
    <div className='relative min-h-[110vh] bg-gradient-to-b from-gray-50 to-white pb-0' >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-35'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-20'>
                <div className='flex-1 text-center lg:text-left'>
            
                <h1 className='text-2xl sm:text-4xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12'>
                    투명한 투자 프로세스를
                    <span className='block text-blue-600 mt-2 lg:mt-6'>
                    수익자에게 공개합니다.
                    </span>
                </h1>
                <p className='text-lg sm:text-xl text-gray-800 text-semibold mb-8 max-w-2xl mx-auto'>
                    간결하면서 상황의 본질을 탐구
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                    <button className='px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl'>
                    문의하기
                    </button>
                    <button className='px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold'>
                    알아보기
                    </button>
                </div>
                </div>
                <div className='flex-1 w-full max-w-2xl lg:max-w-none'>
                    <div className='relative'>
                        <img src={HeroImage} alt="Hero" className='relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto px-4'> 
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            {[
              {number:"200%", label: "엑싯 완료"},
              {number:"95%", label:"투자 만족도"},
              {number:"20년+", label:"업계 경력"},
              {number:"25/7", label:"서비스 지원"},
            ].map((stat, index)=>(
                <div key={index} className='text-center'><div className='text-3xl font-bold text-blue-600'>
                    {stat.number}
                    </div>
                    <div className='text-gray-900'>{stat.label} </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Hero
