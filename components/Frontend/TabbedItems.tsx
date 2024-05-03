"use client"
import { Tabs } from "flowbite-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";


export default function TabbedItems() {


  const services = [
    {
      title:"Telehealth",
      image:'/post1.png',
      slug:'telehalth',
    },
    {
      title:"  Video prescription",
      image:'/post1.png',
      slug:'telehalth',
    },
    {
      title:"  UTI consult",
      image:'/post1.png',
      slug:'telehalth',
    },
    {
      title:"Mental health ",
      image:'/post1.png',
      slug:'telehalth',
    },
    {
      title:"ED consult ",
      image:'/post1.png',
      slug:'telehalth',
    },
    {
      title:"  Urgent care ",
      image:'/post1.png',
      slug:'telehalth',
    },
  ]

  const tabs = [
    {
      title:"Popular Services",
      icon:Stethoscope,
      component:<ServiceList data={services}/>,
    },
    {
      title:"Doctors",
      icon:Microscope,
      component:<LinkCards/>,
      content:["afdasffas"
      ]
    },
    {
      title:"Specialist",
      icon:Activity,
      component:<LinkCards className="bg-blue-900"/>,
      content:["asfasffsa"
      ]
    },
    {
      title:"Symptoms",
      icon:Syringe,
      component:<LinkCards className="bg-pink-950"/>,
      content:["asfdem"
      ]
    },
  ]

  return (
    <Tabs aria-label="Tabs with icons" style="underline">
        {tabs.map((tab,i)=>(
             <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
              {tab.component}
           </Tabs.Item>
        ))}
    </Tabs>
  );
}
