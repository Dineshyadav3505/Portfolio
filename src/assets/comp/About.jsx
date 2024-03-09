import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  const handleDownload = () => {
    const url = 'src/assets/img/Dineshs_Resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'downloaded_file.jpg');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Navbar />
      <div className="px-28 h-screen w-full flex  ">
        <div className="text w-1/2 pt-20 ">
          <h1 className="text-[6vw] capitalize text-zinc-500 font-extrabold">
            hey there,
          </h1>
          <h1 className="text-[6vw] capitalize text-zinc-900 font-extrabold">
            I'm Dinesh.
          </h1>
          <p className="text-[1.2vw] mt-20 mb-16 ">I’m a devloper who began their career as the quiet, artsy kid at the back of the classroom, constantly doodling in their workbooks. My combined passions for art, storytelling, and psychology brought me here, in a position where I can demystify the everyday problems of users and empower them with delightful experiences and solutions. I studied computer science in AI & ML at the University of chandigarh, and as a recent grad, I'm looking forward to my next chapter! </p>
          <a className="text-[1.8vw] " href="////" target="_blank"> <i class="ri-arrow-right-line"></i> Resume </a>
        </div>
        <div className="img w-1/2 h-[80vh] flex justify-center items-center ">
          <img className="h-[60vh]" src="src/assets/img/img.png" alt="///" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
