import Link from "next/link"
import SectionHeading from "./SectionHeading"
import ToggleButton from "./ToggleButton"
import { Map } from "lucide-react"
import DoctorsListCarousel from "./DoctorsListCarousel"


const DoctorsList = ({title="Telehalth visit", isInPerson, className="bg-pink-100 py-8 lg:py-24"}:{title?:string,isInPerson?:boolean,className?:string}) => {

  const  doctors = [
    {
      name:"John"
    },
    {
      name:"Emre"
    },
    {
      name:"Eda"
    },
    {
      name:"Mustafa"
    },
    {
      name:"Nebahat"
    },
    {
      name:"Asan"
    },
    {
      name:"VSYNC"
    },
  ]

  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto">
      <SectionHeading title={title} />
    <div className="py-4 flex items-center justify-between">
      {isInPerson? (
        <Link href='#' className="text-sm flex items-center text-blue-700 font-semibold">
          <Map className="mr-2 flex-shrink-0 w-4 h-4"/>
          <span>Map View</span>
        </Link>
      ):(
        <ToggleButton />
      )}
      <Link className="py-3 px-6 border border-blue-600 bg-white" href='#'>See All</Link>

    </div>
    <div className="py-6">
            <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson}/>
      </div>
      </div>
    </div>
  )
}

export default DoctorsList