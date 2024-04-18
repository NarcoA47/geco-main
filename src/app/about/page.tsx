import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zambia's Number One Game Developers.",
  description: "Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation.",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="my-8">
      <Breadcrumb
        pageName="About Us"
        description="Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </div>
  );
};

export default AboutPage;
