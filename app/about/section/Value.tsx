// import Button from '@/app/component/Button'
import React from 'react'

const Value:React.FC = () => {
    const valueData = [
        {id:1,
            valueImg: '/quality.png',   
            valueTitle: 'Quality Without Shortcuts',
            valueDesc: ' We believe "fast" should not mean cheap. While others look for ways to cut costs, we look for ways to elevate the experience. From premium oils to hand-picked produce, we choose the best path, not the easiest one.  '
        },
         {id:2,
            valueImg: '/radial-freshness.png',   
            valueTitle: 'Radical Freshness',
            valueDesc: 'Freshness isn"t a marketing buzzword; it’s our daily ritual. We don’t own a long-term freezer. Our kitchen operates on a 24-hour cycle—prepped today, served today, enjoyed today.'
        },
         {id:3,
            valueImg: '/people-frist-service.png',   
            valueTitle: 'People-First Service',
            valueDesc: ' Behind every order is a team of real people. We take care of our kitchen staff and our drivers, because we know that happy hands make better food. When you support us, you’re supporting a community that cares. '
        }
    ]
  return (
    <section className='pt-12'>
        <h2 className='text-4xl text-[#F9F9F9]  font-semibold text-center'>Our Values</h2>
        <p className='text-lg font-normal text-[#F9F9F9] text-center py-2'>
            We don’t just follow recipes; we follow a set of principles that ensure every meal is worthy of your table. 
        </p>
       
        <div className='px-10 lg:px-[6em] py-10'>
               {
                valueData.map((item , index) => (
                    <div className={`flex justify-start items-center gap-6 lg:gap-x-[50px] ${index === 1 ? 'flex-row-reverse  justify-end  lg:translate-y-[-24px] text-right' : ''}`} key={item.id} >
                        <div>
                            <img src={item.valueImg} alt="" />
                        </div>
                        <div className='lg:w-[367px]'>
                            <h2 className='text-white text-lg font-semibold'>{item.valueTitle}</h2>
                            <p className='text-white text-[15px] font-medium py-2'>{item.valueDesc}</p>
                        </div>
                    </div>
                ))
            } 
        </div>
          
         <div className='text-center lg:h-[500px] flex justify-center items-center flex-col'
         style={{
            backgroundImage: "url('/white-bg.png')"
         }}
         >
             <h2 className='text-lg font-normal text-[#121212] text-center py-2 mb-6'> 
            We value your time as much as your tastebuds. if it’s not fresh enough, fast enough, or good <br /> enough, it’s not Lescy Romeo
        </h2>
        <a href="" className='bg-[#f9f9f9]    px-10 lg:px-20 py-4 rounded-[15px] text-[#E31E24] border-[2.24px] border-[#E31E24] hover:scale-[1.1]'>Order Now</a>
         </div>
    </section>
  )
}

export default Value