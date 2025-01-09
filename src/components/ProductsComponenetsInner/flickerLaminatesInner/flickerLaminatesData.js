import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
// import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/flickerLaminates.png";
import Ab1 from "../../../images/svglogo/AestheticallyBeautiful.jpg";
import Scr1 from "../../../images/svglogo/Scratchresistant.jpg";
import Hr1 from "../../../images/svglogo/HeatRetardant.jpg";
import Fr1 from "../../../images/svglogo/FireResistant.jpg";
import Es1 from "../../../images/svglogo/EasytoClean.jpg";
import Sus1 from "../../../images/svglogo/Sustainability.jpg";
import Imp1 from "../../../images/svglogo/ImpactResistant.jpg"
import Sr1 from "../../../images/svglogo/ChemicalResistant.jpg";
// import products from "@/components/aboutUs_products/productData";
// import verticalIcon from "../../images/vertical-icon.svg";
// import horizontalIcon from "../../images/horizontal-icon.svg";
// import laboratoriesIcon from "../../images/laboratories-icon.svg";
// import electronicIndustriesIcon from "../../images/electronic-industries-icon.svg";
// import pharmaceuticalLabsIcon from "../../images/pharmaceutical-labs-icon.svg";
// import itOfficesIcon from "../../images/it-offices-icon.svg";
// import callCentresIcon from "../../images/call-centres-icon.svg";

const FlickerLaminatesData = {
  header: "Flicker Laminates",
  description: `Royal Crown’s Flicker laminate is the epitome of luxury and sophistication, renowned for its
captivating, ever-changing surface that plays with light and perspective. This exquisite laminate
boasts a metallic or iridescent finish, creating a mesmerising flickering effect as light dances
across its surface. Its stunning visual allure makes it a sought-after choice for high-end interior
design, gracing wall panels, furniture, cabinetry, and various surfaces with its dynamic
presence. The interplay of shifting light reflections imbues spaces with a modern, sophisticated
ambiance and a touch of futuristic elegance, making it a popular option for prestigious
commercial settings like hotels, retail stores, and offices, as well as exclusive residential
projects. Beyond its aesthetic appeal, our flicker laminate upholds the practical advantages of
traditional laminates, offering durability, scratch and stain resistance, and easy maintenance.
With a range of captivating colors and patterns, designers can effortlessly incorporate this
dynamic effect into diverse styles and settings, ensuring a truly remarkable visual experience.`,
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

export default FlickerLaminatesData;
