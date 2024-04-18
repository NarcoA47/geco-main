import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Zambia's Number One Game Developers.",
  description: "Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation.",
  // other metadata
};

function Services() {
  return (
    <>
      <div className="my-8">
      <Breadcrumb
        pageName="Our Services"
        description="Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation."
      />
    </div>
    </>
  )
}

export default Services
