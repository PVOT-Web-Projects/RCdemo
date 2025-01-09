import image1 from "@/images/decorative1.png";
import image2 from "@/images/decorative2.png";
import image3 from "@/images/decorative3.png";
import image4 from "@/images/interior1.png";
import image5 from "@/images/interior2.png";
import image6 from "@/images/interior3.png";
import image7 from "@/images/exterior1.png";
import image8 from "@/images/exterior2.png";
import image9 from "@/images/exterior3.png";
import logo1 from "@/images/xylem.png";
import logo2 from "@/images/crown.png";
import logo3 from "@/images/crown_qbiss.png";
import logo4 from "@/images/crownXCL.png";
import logo5 from "@/images/svgLogos/FinalHeaderLogo.svg";
// import CategoryLeftRightItem from "./categoryLeftRightItem.jsx/CategoryLeftRightItem";
import "./categoryLeftRight.scss"
import CategoryLeftRightItemOne from "./categoryLeftRightItem.jsx/CategoryLeftRightItem";
const categoryLeftRightDataOne = [
    {
        title:"XYLEM",
        text:"Step into the world of Xylem, where innovation is at the heart of everything we do. Xylem represents our premium-grade decorative laminates, meticulously crafted to elevate your surroundings. Each laminate embodies inspiring, high quality, and artistic excellence designed to define your unique style. From curating unique designs to creating exclusive laminates, we are on a mission to bring your vision to life.",
        url:"/xylem",
        image1:image1,
        image2:image2,
        image3:image3,
        logo1:logo1,
        
    },
    {
        title:"QBISS",
        text:"Qbiss is a high-pressure structural laminate made from multiple layers of kraft papers, with a thickness range from 2mm to 25mm. Its decorative face on both sides makes it suitable for interior applications like washroom cubicles, locker doors, wall panels, and laboratory furniture. With a density of 1.45gm/cm3, our compacts are exceptionally resilient and require no substrate support in thicknesses over 6mm.",
        url:"/qbiss",
        image1:image4,
        image2:image5,
        image3:image6,
        logo1:logo3,
    },
    {
        title:"CROWN XCL",
        text:"XCL- Exterior Compact Laminate is a high pressure laminate, built up from multiple papers of kraft papers to produce laminate in thickness ranging from 2mm to 25mm. ",
        url:"/crown-xcl",
        image1:image7,
        image2:image8,
        image3:image9,
        logo1:logo4,
    },
    {
        title:"ROYAL CROWN",
        text:"Royal Crown Laminates takes pride in its rich legacy of innovation, cutting-edge technology, and expertise, offering over 450 trendsetting surface designs. Our collection of modern laminates boasts a wide range of finishes and textures in 1mm thickness, empowering you to effortlessly realize your dream decor.",
        url:"/royal-crown",
        image1:image7,
        image2:image8,
        image3:image9,
        logo1:logo5,
    },
    {
        title:"CROWN",
        text:"Crown's Lean Line offers an exquisite and cost-effective range of laminates in a variety of designs, colors, and textures, all in 0.8mm thickness. Manufactured at our highly advanced production facility, the Lean Line guarantees a consistent and exceptional level of quality.",
        url:"/crown",
        image1:image7,
        image2:image8,
        image3:image9,
        // logo1:logo4,
        logo1:logo2,
    },
]

const CategoryLeftRightO = ()=>{
    return(
        <div className="category_left_right1">
            <div className="category_left_right1__wrapper">
               {categoryLeftRightDataOne.map((item, index)=>(
                <CategoryLeftRightItemOne key={index} {...item} />
               ))}
            </div>
        </div>
    )
}
export default CategoryLeftRightO;