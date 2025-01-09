import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/Antifinger.png";
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

const AntifingerLaminatesData = {
  header: "Anti-finger Laminates (Spotless)",
  description: `Discover the incredible benefits of Royal Crown’s Spotless – a revolutionary decorative laminate
engineered to defy fingerprints, smudges, and marks, ensuring a spotless, low-maintenance
surface. Boasting a specialized matte or low-gloss finish with cutting-edge coating technology,
this laminate not only repels oils and moisture from fingerprints but also delivers heightened
resistance to scratches and abrasions. Designed for high-touch surfaces like kitchen cabinets,
countertops, doors, and office furniture, spotless laminates are a game-changer in maintaining
a pristine appearance with their luxurious, velvety texture. With minimal cleaning requirements,
these laminates are perfect for residential or commercial spaces. Available in a range of
modern colors and designs, they add a sleek, contemporary flair to any interior. Beyond their
aesthetic appeal, they are exceptionally durable, effortless to clean, and impervious to
moisture, heat, and stains, ensuring enduring performance. Experience the perfect fusion of
functionality and beauty with our anti-finger laminate.
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
      image1: Imp1  ,
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
        pdfUrl: "/pdfs/antifinger.pdf",
        pdfDesc: "Download",
      },
    ]
  },
};

export default AntifingerLaminatesData;
