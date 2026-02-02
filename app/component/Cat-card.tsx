import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface catProps {
catCardImg: string;
catAltImg: string;
catCardTitle: string;
catLink: string
}

const CatCard: React.FC <catProps> = ({catCardImg , catAltImg, catCardTitle, catLink}) => {
  return (
  <div className='text-center flex flex-col justify-center items-center'>
     <Link href={catLink}>
      <div 
  
    className=''
    > 
    <img src={catCardImg} alt={catAltImg} width={160} height={158} className='object-cover  border-2  border-[#F9F9F9]  rounded-[40px] hover:border-4 '
      style={{
        boxShadow: '0px 4px 4px 0px #F9F9F940'
        
    }}
    /> 
    </div>
    <p className='text-[#F9F9F9] text-[17px] font-medium text-center pl-1'>{catCardTitle}</p>
     </Link>
  </div>
  )
}

export default CatCard