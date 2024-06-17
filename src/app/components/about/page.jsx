
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[15%]"
    >
      <div className="mx-10 font-spacesemibold text-[40px] md:text-[80px] leading-tight text-center md:text-left">
        <p className="text-[#949686] font-spacesemibold text-lg">Introduction</p>
        <p className="font-spacesemibold text-[42px] text-white">Hello !, I&apos;m Aditya Prastya, </p>
        <p className="font-spacesemibold text-[42px] text-white underline">Web Programmer</p>
        <p className="font-spacesemibold text-[42px] text-white">Based On Indonesia Bali </p>
        <p className="text-[#949686] text-2xl my-2">I’m Junior Full-Stack Web Programmer, Lived On Denpasar City, Bali. As a Full-stack Web Programmer, Make me good at managing all components of a web application, from the User Interface to the Server and Database.</p>
      </div>
      <div className="flex justify-center md:justify-end items-center">
        <Image src="/stack.png" alt="Tech Stack Image" width={500} height={500} className="md:w-auto md:h-auto object-cover" />
      </div>
    </div>
  );
};

export default About;
