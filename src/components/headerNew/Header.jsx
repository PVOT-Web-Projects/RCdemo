"use client";
import Link from "next/link";
import logo from "@/images/svgLogos/FinalHeaderLogo.svg";
import logo1 from "@/images/svgLogos/white_logo.svg";
import logo2 from "@/images/svgLogos/header_crown_logo.svg";
import logo3 from "@/images/crown_white.png";
import HoverImgDefault from "@/images/decorative3.png"; // Default image
import HoverImgDefault1 from "@/images/decorative1.png"; // Default image
import HoverImg1 from "@/images/decorative1.png";
import HoverImg2 from "@/images/decorative2.png";
import HoverImg3 from "@/images/decorative3.png";
import HoverImg4 from "@/images/decorative1.png";
import fb from "@/images/svgLogos/facebook.svg";
import ig from "@/images/svgLogos/instagramSvg.svg";
import yt from "@/images/svgLogos/youtube.svg";
import wa from "@/images/svgLogos/whatsapp.svg";
import li from "@/images/svgLogos/Linkedin.svg";
import "./header.scss";
import Image from "next/image";
import LinkHover from "../linkHover/LinkHover";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "../pageTransition/PageTransition";

const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubmenuItem, setHoveredSubmenuItem] = useState(null);
  const [hoveredSubSubmenuItem, setHoveredSubSubmenuItem] = useState(null); // State for sub-submenu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isOpen, setIsOpen] =useState(false);
  // Data for each subcategory and its items
  const categoryData = [
    {
      name: "HPL LAMINATE",
      items: [
        { name: "Decorative Laminate", url: "/decorative-laminates" },
        { name: "Postforming Laminate", url: "/postforming-laminates" },
      ],
    },
    {
      name: "COMPACT LAMINATE",
      items: [
        { name: "Standard Grade (Qbiss)", url: "/standard-grade-laminates" },
        { name: "Exterior Cladding(XCL)", url: "/exterior-cladding-laminates" },
        { name: "Interior Cladding", url: "/interior-cladding-laminates" },
        { name: "Fire Retardant", url: "/fire-retardant-laminates" },
        { name: "Color Core", url: "/" },
      ],
    },
    {
      name: "SPECIALITY LAMINATE",
      items: [
        { name: "Writable Laminate", url: "/writable-laminates" },
        {
          name: "Antifinger Laminate (Spotless)",
          url: "/antifinger-laminates",
        },
        { name: "Metallic Laminate", url: "/metallic-laminates" },
        { name: "Synchro Laminate", url: "/synchro-laminates" },
        { name: "Color core Laminate", url: "/color-core-laminates" },
        { name: "Digital Laminate", url: "/" },
        { name: "Flicker Laminate", url: "/flicker-laminates" },
      ],
    },
    {
      name: "TECHNICAL GRADE LAMINATE",
      items: [
        { name: "Electrostatic Dissipative", url: "/" },
        { name: "Chemical Resistant", url: "/" },
        { name: "Fire Retardant", url: "/" },
      ],
    },
  ];

  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleSubCategoryMenu = (categoryIndex) => {
    // If the clicked category is already active, collapse it
    setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };
  const pathname = usePathname();
  // console.log("url", isHome);
  useEffect(() => {
    if (pathname === "/") setIsHome(true);
    else setIsHome(false);
  }, [pathname]);
  // Function to close the mobile menu with animation
  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };
  // useEffect(() => {
  //   // Set the initial value of isHome based on the current pathname
  //   const pathname = window.location.pathname;
  //   setIsHome(pathname === "/");

  //   // Define the scroll handler function
  //   const handleScroll = () => {
  //     if (!isMenuOpen && window.scrollY > window.innerHeight * 1.2) {
  //       setIsNavbarVisible(false); // Hide navbar after 120vh
  //     } else {
  //       setIsNavbarVisible(true); // Show navbar when scrolling back up
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isMenuOpen]);
  
  useEffect(() => {
    // Set the initial value of isHome based on the current pathname
    const pathname = window.location.pathname;
    setIsHome(pathname === "/");
  
    // let lastScrollY = window.scrollY; // Track the last scroll position
  
    // Define the scroll handler function
      // Define the scroll handler function
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const isScrolledBeyond40vh = scrollY > window.innerHeight * 0.2; // 40% of viewport height
  
        if (!isScrolledBeyond40vh) {
          // If we are within the first 40vh, the navbar must remain visible
          setIsNavbarVisible(true);
        } else {
          // Otherwise, toggle visibility based on scroll direction
          if (scrollY > lastScrollY) {
            // Scrolling down, hide the navbar
            setIsNavbarVisible(false);
          } else if (scrollY < lastScrollY) {
            // Scrolling up, show the navbar
            setIsNavbarVisible(true);
          }
        }
  
        // Update the last scroll position to detect scroll direction
        setLastScrollY(scrollY);
      };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);
  


  const getSubmenuImage = () => {
    switch (hoveredSubmenuItem) {
      case "submenu1":
        return HoverImg1;
      case "submenu2":
        return HoverImg2;
      case "submenu3":
        return HoverImg3;
      case "submenu4":
        return HoverImg4;
      case "submenu5":
        return HoverImg1;
      case "submenu6":
        return HoverImg2;
      default:
        return HoverImgDefault; // Default image
    }
  };
  const getSubmenuImageAbout = () => {
    switch (hoveredSubmenuItem) {
      case "submenu1":
        return HoverImg1;
      case "submenu2":
        return HoverImg1;
      case "submenu3":
        return HoverImg4;
      case "submenu4":
        return HoverImg3;
      case "submenu5":
        return HoverImg2;
      case "submenu6":
        return HoverImg1;
      default:
        return HoverImgDefault1; // Default image
    }
  };

  const getSubSubmenuImage = () => {
    switch (hoveredSubSubmenuItem) {
      case "sub-submenu1":
        return HoverImg1;
      case "sub-submenu2":
        return HoverImg4;
      case "sub-submenu3":
        return HoverImg3;
      case "sub-submenu4":
        return HoverImg2;
      default:
        return HoverImgDefault;
    }
  };
  const getSubSubmenuImage1 = () => {
    switch (hoveredSubSubmenuItem) {
      case "sub-submenu1":
        return HoverImg3;
      case "sub-submenu2":
        return HoverImg4;
      case "sub-submenu3":
        return HoverImg3;
      case "sub-submenu4":
        return HoverImg2;
      default:
        return HoverImgDefault;
    }
  };
  const getSubSubmenuImage3 = () => {
    switch (hoveredSubSubmenuItem) {
      case "sub-submenu1":
        return HoverImg1;
      case "sub-submenu2":
        return HoverImg3;
      case "sub-submenu3":
        return HoverImg1;
      case "sub-submenu4":
        return HoverImg3;
      default:
        return HoverImgDefault;
    }
  };

  return (
    <header className={isNavbarVisible ? "navbar-visible" : "navbar-hidden"}>
      <nav>
        <ul className={isHome ? "dark" : "light"}>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            viewport={{ once: true }}
            onMouseEnter={() => {
              setHoveredItem("products");
              // setHoveredSubmenuItem("submenu1");
              // setHoveredSubSubmenuItem("sub-submenu1");
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoveredSubmenuItem(null); // Clear submenu hover state when leaving main item
              // setHoveredSubmenuItem(null);
            }}
          >
            <LinkHover
              url={"#"}
              text={"Category"}
              fontSize={"16px"}
              isHomePage={isHome}
              onClick={(e) => e.preventDefault()} // Disable link behavior for "Category"
            />
            {hoveredItem === "products" && (
              <motion.div
                className="ProductsLi"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                // className="ProductsLi"
              >
                <motion.ul id="ProductsOne">
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu1")}
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      HPL LAMINATE
                    </Link>
                    <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
                    {/* <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg> */}

                    {hoveredSubmenuItem === "submenu1" && (
                      <motion.div
                        className="ProductsLi1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu1")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/decorative-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Decorative Laminate
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu2")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/postforming-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Postforming Laminate
                            </Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // exit={{ opacity: 0 }}
                          // transition={{ duration: 0.3 }}
                        >
                          {/* <Image
                            src={getSubSubmenuImage()}
                            alt="Submenu Image"
                          /> */}
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                  {/*  */}
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu2")}
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      COMPACT LAMINATE
                    </Link>
                    <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
                    {/* <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg> */}

                    {hoveredSubmenuItem === "submenu2" && (
                      <motion.div
                        className="ProductsLi1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                            onMouseEnter={() =>
                              setHoveredSubSubmenuItem("sub-submenu1")
                            }
                            onMouseLeave={() => setHoveredSubSubmenuItem(null)}
                          >
                            <Link
                              href="/standard-grade-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Standard Grade (Qbiss)
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu2")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/exterior-cladding-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Exterior Cladding (XCL)
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu3")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/interior-cladding-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Interior Cladding
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu4")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/fire-retardant-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Fire Retardant
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu5")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="#"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Color Core
                            </Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* <Image
                            src={getSubSubmenuImage1()}
                            alt="Submenu Image"
                          /> */}
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                  {/*  */}
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu3")}
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      SPECIALITY LAMINATE
                    </Link>
                    <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
                    {/* <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg> */}

                    {hoveredSubmenuItem === "submenu3" && (
                      <motion.div
                        className="ProductsLi1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu1")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/writable-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Writable Laminate
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu2")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/antifinger-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Antifinger Laminate (Spotless)
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu3")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/metallic-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Metallic Laminate
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu4")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/synchro-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Synchro Laminate
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu5")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/color-core-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Color core Laminate
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu6")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="#"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Digital Laminate
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu7")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="/flicker-laminates"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Flicker Laminate
                            </Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // exit={{ opacity: 0 }}
                          // transition={{ duration: 0.3 }}
                        >
                          {/* <Image
                            src={getSubSubmenuImage3()}
                            alt="Submenu Image"
                          /> */}
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                  {/*  */}
                  <li
                    onMouseEnter={() => setHoveredSubmenuItem("submenu4")}
                    // onMouseLeave={() => setHoveredSubmenuItem(null)}
                  >
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      TECHNICAL GRADE LAMINATE
                    </Link>
                    <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
                    {/* <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg> */}

                    {hoveredSubmenuItem === "submenu4" && (
                      <motion.div
                        className="ProductsLi1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu1")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="#"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Electrostatic Dissipative
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu2")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="#"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Chemical Resistant
                            </Link>
                          </li>
                          <li
                          // onMouseEnter={() =>
                          //   setHoveredSubSubmenuItem("sub-submenu3")
                          // }
                          // onMouseLeave={() =>
                          //   setHoveredSubSubmenuItem(null)
                          // }
                          >
                            <Link
                              href="#"
                              className="SubmenuClass"
                              onClick={() => {
                                setHoveredItem(null); // Close the main menu
                                setHoveredSubmenuItem(null); // Close the submenu
                                setHoveredSubSubmenuItem(null); // Close the sub-submenu
                              }}
                            >
                              Fire Retardant
                            </Link>
                          </li>
                        </ul>
                        <motion.div
                          className="sub-submenu-image"
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // exit={{ opacity: 0 }}
                          // transition={{ duration: 0.3 }}
                        >
                          {/* <Image
                            src={getSubSubmenuImage3()}
                            alt="Submenu Image"
                          /> */}
                        </motion.div>
                      </motion.div>
                    )}
                  </li>
                </motion.ul>
                <motion.div
                  className="submenu-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <Image src={getSubmenuImage()} alt="Submenu Image" /> */}
                </motion.div>
              </motion.div>
            )} 
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
            onMouseEnter={() => {
              setHoveredItem("about");
              setHoveredSubmenuItem("submenu1");
              setHoveredSubSubmenuItem("sub-submenu1");
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoveredSubmenuItem(null); // Clear submenu hover state when leaving main item
              setHoveredSubmenuItem(null);
            }}
          >
            <LinkHover
              url={"/about-us"}
              text={"About Us"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
          </motion.li>
          {/* <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"What's New"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li> */}
        </ul>

        <motion.div
          className="logo"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          <PageTransition href={"/"}>
            {isHome ? (
              <Image src={logo} alt="header_logo" />
            ) : (
              <Image src={logo} alt="header_logo" />
            )}
          </PageTransition>
        </motion.div>
        <ul className={isHome ? "dark" : "light"}>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.6,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover
              url={"/product"}
              text={"Products"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover
              url={"/contact-us"}
              text={"Contact Us"}
              fontSize={"16px"}
              isHomePage={isHome}
            />
          </motion.li>
          {/* <div className="side_logo"> */}
          {/* {isHome ? (
              <Image src={logo2} alt="header_crown_logo" />
            ) : (
              <Image src={logo3} alt="header_crown_logo" />
            )} */}
          {/* </div> */}
        </ul>

{/*  */}
        {/* Mobile menu toggle button */}
        <div
          className="mobile-menu-icon"
          // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onClick={toggleMenu}
        >
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          {/* <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
              fill="#1040e2"
            />
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
          </svg> */}
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ y: "100%" }} // Start from the bottom
              animate={{ y: 0 }} // Animate to the top
              exit={{
                y: "50%", // Exit animation to the bottom
                transition: { duration: 0.4 }, // Ensure the animation completes before menu is hidden
              }}
              transition={{ type: "spring", stiffness: 50 }} // Smooth spring animation
            >
              <ul 
              id="MainMobile"
               className={isHome ? "dark" : "ligh t"}>
                <div className="ToggleMainName">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
                  viewport={{ once: true }}
                  onClick={toggleMenu}
                  className="ToggleMainText"
                >
                  <Link
                  className="CategorySubClass"
                    href={"/"}
                  >
                    Home
                    </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
                  viewport={{ once: true }}
                  onClick={toggleMenu}
                  className="ToggleMainText"
                >
                  <Link
                  className="CategorySubClass"
                    href={"/about-us"}
                  >
                    About Us
                    </Link>
                </motion.li>
                <motion.li
                className="ToggleMainText"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1.6 } }}
                  viewport={{ once: true }}
                  onClick={toggleMenu}
                >
                  <Link
                  className="CategorySubClass"
                    href={"/product"}
                  >
                  Products
                  </Link>
                </motion.li>
                <motion.li className={`category ToggleMainText`} >
                  {/* <div className="CategoryToggleInner" onClick={toggleCategoryMenu}>
                  <Link
                    className="CategorySubClass"
                    href={"/"}
                    
                  >
                    Category
                  </Link>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
                
                  </div> */}
                  <div
                    className="CategoryToggleInner"
                    onClick={toggleCategoryMenu}
                  >
                    <Link className="CategorySubClass" href={"/"} onClick={(e) => e.preventDefault()}>
                      Category
                    </Link>
                    {/* Downward pointing triangle */}
                    <svg
                      className={`category-icon ${
                        isCategoryOpen ? "rotated" : ""
                      }`} // Add rotation when category is open
                      width="15"
                      height="15"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 2L5 7L10 2H0Z" fill="currentColor" />
                    </svg>
                  </div>

                  {isCategoryOpen && (
                    <div className="category-dropdown">
                      <ul>
                        {categoryData.map((category, categoryIndex) => (
                          <li key={categoryIndex} className="subcategory">
                            <Link
                              className="SubcategoryName"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent the link from navigating to #
                                toggleSubCategoryMenu(categoryIndex); // Call your function to toggle subcategory
                              }}
                              // onClick={() =>
                              //   toggleSubCategoryMenu(categoryIndex)
                              // }
                            >
                              {category.name}
                            </Link>

                            {/* Subcategory Dropdown */}
                            {activeCategory === categoryIndex && (
                              <div className="subcategory-dropdown">
                                <ul className="subcategoryInner">
                                  {category.items.map((item, itemIndex) => (
                                    <motion.li
                                      initial={{ opacity: 0 }}
                                      whileInView={{
                                        opacity: 1,
                                        transition: { duration: 0.8 },
                                      }}
                                      viewport={{ once: true }}
                                      key={itemIndex}
                                    >
                                      <Link
                                        href={item.url}
                                        onClick={toggleMenu}
                                      >
                                        {item.name}{" "}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.li>
                <motion.li
                className="ToggleMainText"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 2 } }}
                  viewport={{ once: true }}
                  onClick={toggleMenu}
                >
                  <Link
                  className="CategorySubClass"
                    href={"/contact-us"}
                    // text={"Contact Us"}
                    // fontSize={"18px"}
                    // isHomePage={isHome}
                  >
                  Contact Us
                  </Link>
                </motion.li>
                </div>
                <div className="SocialIconss">
                <div className="bottom">
              <ul className="SocialIconsNav">
                <li>
                  <Link href={"https://www.facebook.com/royalcrownlaminates/"} target="_blank">
                    <Image src={fb} alt="fb" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/royalcrownlaminates/"} target="_blank">
                    <Image src={ig} alt="ig" />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.youtube.com/"} target="_blank">
                    <Image src={yt} alt="yt" /> 
                  </Link>
                </li>
                <li>
                  <Link href={"https://in.linkedin.com/"} target="_blank">
                    <Image src={li} alt="li" />
                     </Link>
                </li>
                <li>
                  <Link href={"https://www.whatsapp.com/"} target="_blank">
                    <Image src={wa} alt="wa"/> 
                  </Link>
                </li>
              </ul>
            </div>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
export default Header;
