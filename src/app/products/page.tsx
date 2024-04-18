import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Zambia's Number One Game Developers.",
  description: "Driven by our passion for storytelling, we craft immersive gaming experiences that celebrate the diverse tapestry of Zambian traditions. From ancient folklore to modern-day legends, each game is a testament to our unwavering commitment to cultural preservation.",
};

function Products() {
  return (
    <>
      <div className="my-8">
      <Breadcrumb
        pageName="Our Products"
        description="At Geco Games Studios, we offer a diverse range of products tailored for gamers like you. From trendy shirts featuring iconic game characters to stylish caps emblazoned with our exclusive designs, our merchandise reflects the essence of gaming culture."
        />
      </div>
    </>
  )
}

export default Products
