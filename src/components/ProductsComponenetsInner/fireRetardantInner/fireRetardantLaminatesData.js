import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/FireRetardant.png";
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

const FireRetardantLaminatesData = {
  header: "Fire Retardant Compacts",
  description: `Crown Decor’s Fire retardant compact laminate stands as a testament to uncompromising fire
resistance, unmatched durability, and timeless style. Consistently crafted by compressing layers
of kraft paper infused with fire-retardant phenolic resin and finished with a protective overlay,
this material sets the new standard for safety and performance. Elevate your projects with the
assurance of meeting the most rigorous fire safety regulations while delivering enduring
strength and captivating aesthetics.

`,
  description1: `They are engineered to decisively curb the advancement of flames, curtail smoke emissions,
and thwart the release of hazardous fumes in the event of a fire. A staple in critical
environments such as public buildings, transport hubs, healthcare facilities, schools, and highrise structures, it offers not only unmatched fire resistance but also exceptional resilience
against impact, moisture, and wear. With a diverse array of colors, patterns, and finishes, fire
retardant compact laminate emerges as the quintessential choice for interior cladding,
partitions, doors, and other applications where safety and design converge. Its unparalleled
fusion of fire safety, durability, and aesthetic adaptability positions it as the ultimate solution
for projects that demand unwavering fire performance standards while refusing to compromise
on style.

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

export default FireRetardantLaminatesData;
