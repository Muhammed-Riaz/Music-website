import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (

    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-[url '(C:\Users\DELL\Desktop\GIAIC-classes\music-next-js\public\bg.jpg)']"
    >
      <div className="p-4 relative z-10 w-full text-center text-white">
        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text  text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Master the Art of Music</h1>
      <Spotlight
        className="-top-70 left-0 md:left-60 md:-bottom-10"
        fill="red"
        />
        <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-300
        max-w-lg mx-auto"
        >Dive into the our comprehensiv music courses and transform your musical journey today. whether you're a beginner or looking to refine your skills , join us to unclock your true potential </p>
        <div className="mt-4">

          <Link href={"/courses"}>
          <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white
          border-neutral-200 dark:border-slate-800"
          >Explore Courses</Button>
          </Link>
        </div>
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
              <Spotlight
        className="-bottom-60 right-0 md:right-60 md:-top-20"
        fill="blue"
        />
      </div>
  )
}

export default HeroSection