"use client"
import { div, p } from "framer-motion/client"
import courses from "../data/courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border"

interface Coursei {
  id: number,
  name:string,
  work:string,
  email:string,
  dob:string,
  address:string ,
  city:string,
  optedin: boolean,
}

function FeaturedSection() {
 const featurecourses =  courses.courses.filter((course:Coursei)=>course.optedin)

  return (

    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-300 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
        </div>
        </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
          {featurecourses.map((course:Coursei)=>(
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-gro">
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.city}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.name}</p>
                  <Link href={`/courses/${course.work}`}>
                  <Button  className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">Learn More</Button></Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >View All Courses</Link>
      </div>
    </div>

  )
}

export default FeaturedSection