import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DoctorCard = ({isInPerson=false}:{isInPerson?:boolean}) => {

  

  const timeStamps = [
    {
      time:"8:30",
      period:"am"
    },
    {
      time:"9:30",
      period:"am"
    },
    {
      time:"10:30",
      period:"am"
    },
    {
      time:"11:30",
      period:"am"
    },
    {
      time:"12:30",
      period:"pm"
    },
    {
      time:"13:30",
      period:"pm"
    },
    {
      time:"14:30",
      period:"pm"
    }
  ]

  return (
    <div className='border border-gray-200 bg-white inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all'>
      <Link href='/doctors/slug'>
      <h2 className='uppercase font-bold text-2xl tracking-widest'>Vijal Patel, PA-C</h2>
      {isInPerson &&       <p className='py-3'>3250 Lincoln Highway, Kendall Park, NU 08824</p>}
      <div className="flex items-center gap-4 py-4">
        <div className="relative">
        <Image src="/doctor.jpg" width={243} height={207} alt='Doctor' className='w-24 h-24 rounded-full object-cover'/>
        {!isInPerson && <p className='absolute bottom-0 right-0 bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full text-blue-700'>
        <Video className='w-6 h-6'/>
        </p>}
        </div>
      <div className="flex flex-col gap-2">
        <p className='flex items-center'>
          <Stethoscope className='w-4 h4- mr-2 flex-shrink-0'/>
          <span>Family Medicine</span>
        </p>
        <p className="bg-green-200 py-3 px-6 uppercase">
          Available today
        </p>
      </div>
      </div>
      </Link>
      <div className="pt-6 border-t border-gray-400">
        <h3 className='flex gap-4 justify-between items-center'><span className='text-gray-600'>Fri, May 3</span> <span className='font-bold'> $137 </span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-2">
          {timeStamps.slice(0,5).map((item,i)=>(
            <Link className='bg-blue-600 text-white text-sm p-2 text-center' key={i} href='#'>
              {item.time}{item.period}
            </Link>
          ))}
          <Link className='bg-blue-900 text-white text-[0.7rem] py-2 px-3 text-center truncate' href='/doctors/slug'>More Times</Link>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard