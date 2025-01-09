import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Productimg1 from "../../../images/colorcoreLaminates.png";
import Ab1 from "../../../images/svglogo/AestheticallyBeautiful.jpg";
import Scr1 from "../../../images/svglogo/Scratchresistant.jpg";
import Hr1 from "../../../images/svglogo/HeatRetardant.jpg";
import Fr1 from "../../../images/svglogo/FireResistant.jpg";
import Es1 from "../../../images/svglogo/EasytoClean.jpg";
import Sus1 from "../../../images/svglogo/Sustainability.jpg";
import Imp1 from "../../../images/svglogo/ImpactResistant.jpg";
import Sr1 from "../../../images/svglogo/ChemicalResistant.jpg";
// import products from "@/components/aboutUs_products/productData";
// import verticalIcon from "../../images/vertical-icon.svg";
// import horizontalIcon from "../../images/horizontal-icon.svg";
// import laboratoriesIcon from "../../images/laboratories-icon.svg";
// import electronicIndustriesIcon from "../../images/electronic-industries-icon.svg";
// import pharmaceuticalLabsIcon from "../../images/pharmaceutical-labs-icon.svg";
// import itOfficesIcon from "../../images/it-offices-icon.svg";
// import callCentresIcon from "../../images/call-centres-icon.svg";

const colorCoreLaminatesData = {
  header: " Color Core Laminates",
  description: `Royal Crown’s Color core laminate is a bold and innovative decorative laminate that redefines
the concept of seamless design. Unlike traditional laminates, its consistent color throughout the
entire thickness ensures a flawless, uninterrupted look, eliminating visible edges or seams.
Imagine the possibilities – from countertops to tabletops, cabinetry, doors, and retail fixtures,
this revolutionary laminate opens the door to limitless design options. It empowers intricate
edge detailing, engraving, and curved surfaces without any distracting contrasts, making it the
epitome of sophisticated elegance. Not only does color core laminate deliver impeccable
aesthetics, but its exceptional durability means it can effortlessly withstand wear, scratches,
moisture, and stains, making it the ideal choice for high-traffic areas. With an extensive range of
colors and finishes, including matte, gloss, and textured options, it gives designers the freedom
to create spaces that are both visually stunning and resilient. In residential and commercial
applications alike, color core laminate stands as a testament to uncompromising quality and
style, setting a new standard in interior design.
`,
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
  products: [
    {
      ProductImg: Productimg1,
    }
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
        pdfUrl: "/pdfs/exteriorgrade.pdf",
        pdfDesc: "Download",
      },
    ]
  },
};

export default colorCoreLaminatesData;
