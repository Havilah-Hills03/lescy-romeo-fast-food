import React from 'react'

const Wrapper:React.FC = () => {
    const wrappperData = [
        {
        id: 1,
        wrapperIcon: '/kitchen-icon.svg',
        wrapperText: 'Everything you eat was prepared in our kitchen this money'
    },
     {
        id: 2,
        wrapperIcon: '/order-icon.svg',
        wrapperText: 'Every Order is checked and sealed for quality.'
    },
     {
        id: 3,
        wrapperIcon: '/driver-icon.svg',
        wrapperText: 'Our drivers are on the move the moment your meal is ready '
    }
]
  return (
    <section className='py-10 grid lg:grid-cols-3 mb-10'>
      {
     wrappperData.map((item) => (
          <div key={item.id} className='flex justify-center items-center flex-col'> 
          <div className='w-[136px] h-[139px] bg-white rounded-[40px] flex justify-center items-center'>  <img src={item.wrapperIcon} alt="" /></div>
          <p className='text-white font-normal  lg:text-lg lg:w-[220px] py-4 text-center'>{item.wrapperText}</p>
        </div>
     ))
      }
    </section>
  )
}

export default Wrapper