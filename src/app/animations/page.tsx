import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animations | Zambia's Number One Game Developers.",
  description: "Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation.",
};

function Animations() {
  return (
    <>
      <div className="my-8">
      <Breadcrumb
        pageName="Geco Animations"
        description="Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation."
      />
      </div>
    </>
  )
}

export default Animations
