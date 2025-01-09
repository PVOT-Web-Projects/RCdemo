import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/xteriroCladding.png";
import Ab1 from "../../../images/svglogo/AestheticallyBeautiful.jpg";
import Scr1 from "../../../images/svglogo/Scratchresistant.jpg";
import Hr1 from "../../../images/svglogo/HeatRetardant.jpg";
import Fr1 from "../../../images/svglogo/FireResistant.jpg";
import Es1 from "../../../images/svglogo/EasytoClean.jpg";
import Sus1 from "../../../images/svglogo/Sustainability.jpg";
import Imp1 from "../../../images/svglogo/ImpactResistant.jpg";
// import Sr1 from "../../../images/svglogo/ChemicalResistant.png";
import Wr1 from "../../../images/svglogo/WaterResistant.jpg";
import Cg1 from "../../../images/svglogo/CigratteBurnResistant.jpg";
import St1 from "../../../images/svglogo/Stainresistant.jpg";
const ExteriorCladdingLaminatesData = {
  header: "Exterior cladding (XCL)",
  description: `Discover Crown Decor’s XCL - Exterior Compact Laminate, a revolutionary high-pressure
laminate accurately crafted from multiple layers of kraft papers. Boasting thicknesses ranging
from 2mm to 25mm, this laminate features a captivating decorative face on both sides,
shielded by a UV protective film to withstand the harshest sun exposure. Whether it's for
Building Facades/Cladding, Balconies, Verandah, or Outdoor Benches, XCL is the ultimate
choice. With an impressive density of 1.45gm/cm3, these compacts are not only incredibly
sturdy and resistant to damage, but they also exhibit exceptional structural stability, eliminating
the need for substrate support in thicknesses over 6mm. Elevate your projects with the
unparalleled durability and aesthetic appeal of Crown Decor’s XCL - Exterior Compact Laminate.`,
  boxes: [
    {
      icon: icon1,
      title: "SHEET THICKNESS",
      details: ["6mm" , "8mm" , "10mm"],
    },
    {
      icon: icon2,
      title: "SHEET SIZE",
      details: ["2440 x 1220 mm (A)", "3050 x 1220 mm (B)", "3050 x 1300 mm* (C)", "*(Available in selected colours)"],
    },
  ],
  features: [
    {
      image1: Wr1,
      description: "Water Resistant",
    },
    {
      image1: Hr1,
      description: "Heat Resistant",
    },
    {
      image1: Cg1,
      description: "Resistant to Cigarette Burns",
    },
    {
      image1: Scr1,
      description: "Scratch Resistant",
    },
    {
      image1: Image1,
      description: "ColourFast",
    },
    {
      image1: Imp1,
      description: "Impact Retardant",
    },
    {
      image1: Sus1,
      description: "Environmental Friendly",
    },
    {
      image1: St1,
      description: "Stain Resistant",
    },
    {
      image1: Image1,
      description: "Sleek Modern Design",
    },
    {
      image1: Image1,
      description: "Rot Resistant",
    },
    {
      image1: Image1,
      description: "Stability",
    },
    {
      image1: Image1,
      description: "Suitable for contract use",
    },
    {
      image1: Image1,
      description: "Flame Resistant",
    },
    {
      image1: Image1,
      description: "Weather Resistant",
    },
    {
      image1: Image1,
      description: "Indoor and Outdoor use",
    },
    {
      image1: Es1,
      description: "Easy to clean",
    },
    {
      image1: Image1,
      description: "Minimum Maintenance",
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

export default ExteriorCladdingLaminatesData;
