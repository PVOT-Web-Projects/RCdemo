import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Productimg1 from "../../../images/decorativeLaminates.png";
import Ab1 from "../../../images/svglogo/AestheticallyBeautiful.jpg";
import Scr1 from "../../../images/svglogo/Scratchresistant.jpg";
import Hr1 from "../../../images/svglogo/HeatRetardant.jpg";
import Fr1 from "../../../images/svglogo/FireResistant.jpg";
import Es1 from "../../../images/svglogo/EasytoClean.jpg";
import Sus1 from "../../../images/svglogo/Sustainability.jpg";
import Imp1 from "../../../images/svglogo/ImpactResistant.jpg";
import Sr1 from "../../../images/svglogo/ChemicalResistant.jpg";

const DecorativeLaminatesData = {
  header: "Decorative Laminates",
  description: `Royal Crown’s decorative laminates undergo a cautious production process where multiple
 papers, including tissue paper, decor paper, barrier paper, and kraft paper, are impregnated
 with resin to create an exceptionally durable product. Through high heat and pressure
 fusion, our laminates form strong bonds, guaranteeing superior performance. The non
decorative side is uniformly sanded using cutting-edge machinery to ensure optimal
 adhesion. Our unwavering commitment to aggressive quality control measures is embedded
 in our manufacturing process, guaranteeing the delivery of only top-quality laminates..`,
  description1: `Our carefully curated range caters to a vast spectrum of applications, extending from
 furniture and kitchen cabinets to office interiors. As the epitome of interior solutions, our
 decorative laminate brand offers a diverse array, ranging from captivating abstracts to rich
 wood grains, luxurious textiles to elegant stones, and versatile gloss surfaces to tactile
 textures. Designed for both vertical and horizontal applications, our laminates are the
 quintessential choice for surface decoration, boasting abrasion resistance, mild chemical
 resistance, diverse finishes, and effortless cleaning, making them the perfect enhancement
 for any space.`,
  boxes: [
    {
      icon: icon1,
      title: "SHEET THICKNESS",
      details: "0.6 mm to 1.5mm",
    },
    {
      icon: icon2,
      title: "SHEET SIZE",
      details: ["1220 x 2440 mm", "mm", "mm", "mm"],
    },
  ],
  products:[
    {
      ProductImg: Productimg1,
    }
  ],
  // specs:[
  //   {
  //     PdfImage: PdfImg1,
  //     pdfLink: "/pdfs/ANNUAL-ACTION-PLAN-2023-2024.pdf",
  //     pdfDescription: "Decorative Technical Specification"
  //   }
  // ],
  features: [
    {
      image1: Ab1,
      description: "Aesthetically Beautiful",
    },
    {
      image1: Scr1,
      description: "Scratch Resistant",
    },
    {
      image1: Sr1,
      description: "Solvent Resistant",
    },
    {
      image1: Imp1,
      description: "Impact Resistant",
    },
    {
      image1: Hr1,
      description: "Heat Retardant",
    },
    {
      image1: Fr1,
      description: "Fire Retardant",
    },
    {
      image1: Es1,
      description: "Easy to clean & maintain",
    },
    {
      image1: Sus1,
      description: "Sustainable",
    },
  ],
  application: {
    alignment: [
      {
        label: "Vertical",
        description: "Vertical alignment description here.",
      },
      {
        label: "Horizontal",
        description: "Horizontal alignment description here.",
      },
    ],
    suitableFor: [
      { label: "Laboratories", description: "Laboratories description here." },
      {
        label: "Electronic Industries",
        description: "Electronic Industries description here.",
      },
      {
        label: "Pharmaceutical Labs",
        description: "Pharmaceutical Labs description here.",
      },
      { label: "IT Offices", description: "IT Offices description here." },
      { label: "Call Centres", description: "Call Centres description here." },
    ],
    pdfLink: [
      {
        pdfUrl: "/pdfs/hpl.pdf",
        pdfDesc: "Download",
      },
    ]
  },
};

export default DecorativeLaminatesData;
