"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./aboutUs_product.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import products from "./productData.js";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Skeleton, Grid } from "@mui/material";
const Page = () => {
  const itemsPerPage = 25;
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedTab, setSelectedTab] = useState(""); // Store active tab
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedFinish, setSelectedFinish] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedThickness, setSelectedThickness] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [isMobile, setIsMobile] = useState(0);
  const [tab, setTab] = useState("");// Adding a loading state
  const [loading, setLoading] = useState(true); // Initially, set loading to t
  const pathName = usePathname();
  const [shortTitle, setShortTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState("all"); // Initially no tag selected
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shortNumber, setShortNumber] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [products, setProducts] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const router = useRouter();
  // Create a ref to the element you want to scroll to
  const projectsRef = useRef(null);
  console.log(currentData);
  useEffect(() => {
    fetch(
      "https://vanras.humbeestudio.xyz/wp-json/wc/store/products/?per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false); // Set loading to false once data is fetched
        console.log("API Response:", data); // Log the response for debugging
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      })
      .catch((error) => {
        setLoading(false); // Set loading to false once data is fetched
        console.error("Failed to fetch data:", error);
      });
  }, []);

  // useEffect(() => {
  //   const hash = typeof window !== "undefined" ? window.location.hash : "";

  //   // const fullPath = pathName + hash;
  //   const categorySlug = hash ? hash.replace("#", "") : ""; // Get category slug from the URL hash
  //   console.log("Selected Category from URL Hash:", categorySlug);
  //   if (categorySlug) {
  //     const category = categoryMap[fullPath] || "all";
  //     const filteredData = products.filter((product) =>
  //       product.categories.some(
  //         (category) =>
  //           category.slug.toLowerCase() === categorySlug.toLowerCase()
  //       )
  //     );
  //     // Log what products are being selected
  //     console.log("Filtered Data Based on Category:", filteredData);
  //     setActiveTab(fullPath);
  //     setCurrentData(filteredData);
  //   } else {
  //     setCurrentData(products);
  //   }
  // }, [pathName, products]);
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const categorySlug = hash ? hash.replace("#", "") : "";
    if (categorySlug) {
      setActiveTab(categorySlug);
      const filteredData = products.filter((product) =>
        product.categories.some(
          (categoryItem) => categoryItem.slug === categorySlug
        )
      );
      setCurrentData(filteredData);
    } else {
      setCurrentData(products);
    }
  }, [pathName, products]);
  const handlePageChange = (event, value) => {
    setPageNumber(value);
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const lastIndex = pageNumber * itemsPerPage;
  // const firstIndex = lastIndex - itemsPerPage;
  // const displayedData = currentData.slice(firstIndex, lastIndex);
  

  const categories = [
    { label: "Plain Colour", value: "Plain Colour" },
    { label: "Abstract", value: "Abstracts" },
    { label: "Classic Wood Grains", value: "Classic Wood Grains" },
    { label: "Stones", value: "Stones" },
    { label: "Solid Colors", value: "Solid Colors" },
    { label: "Textile", value: "Textile" },
    { label: "Mirrors", value: "Mirrors" },
    { label: "Woodgrain", value: "Woodgrain" },
  ];
  const size = [
    { label: "8 x 4", value: "8*4"  },
    { label: "10 x 4.25", value: "8*9" },
    { label: "12 x 6", value: "3*2" },
    { label: "14 x 6", value: "6*6" },
    { label: "3 x 6", value: "3*6" },
    { label: "6 x 3", value: "6*3" },
  ];
  const thickness = [
    { label: "0.8 mm", value: "0.8 mm" },
    { label: "1.00 mm", value: "1.00 mm" },
    { label: "6 mm", value: "6 mm" },
    { label: "8 mm", value: "8 mm" },
    { label: "12 mm", value: "12 mm" },
    { label: "13 mm", value: "13 mm" },
  ];

  const color = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
    { label: "Gray", value: "Grey" },
    { label: "Brown", value: "Brown" },
    { label: "Pink", value: "Pink" },
    { label: "Yellow", value: "Yellow" },
    { label: "White", value: "White" },
  ];
  const mappedColor = useMemo(() => {
    return color.map((c) => ({ ...c, className: "myOptionClassName" }));
  }, [color]);
  const handleTypeChange = (e) => {
    setSelectedType(e.value);
  };
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategory((prevSelectedCategory) => {
      if (checked) {
        console.log("Category Selected:", value); // Log the selected category
        return [...prevSelectedCategory, value];
      } else {
        return prevSelectedCategory.filter((category) => category !== value);
      }
    });
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.value);
  };
const handleSizeClick = (sizeValue) => {
  // setSelectedSize(sizeValue);
  setSelectedSize(prevSize => prevSize === sizeValue ? "" : sizeValue);
  const exploreCollectionElement = document.querySelector("#sticky_top");
  if (exploreCollectionElement) {
    exploreCollectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  const handleThicknessChange = (e) => {
    setSelectedThickness(e.value);
  };

  const handleColorChange1 = (e) => {
    setSelectedColor(e.value);
  };
  const handleColorChange = (color) => {
    // If the same color is clicked again, reset the selected color
    if (selectedColor === color) {
      setSelectedColor(null); // Clear the selection
    } else {
      setSelectedColor(color); // Set the selected color
    }
  };

  const filteredProducts1 = useMemo(() => {
    return products.filter((product) => {
      // Tab-specific filtering logic
      const tabMatch = activeTab === "all" || product.category === activeTab;
      const brandMatch =
        selectedBrand === "all" || product.category === selectedBrand;
      const categoryMatch =
        selectedCategory.length === 0 ||
        selectedCategory.some((selectedCat) =>
          product.attributes.some(
            (attr) =>
              attr.name === "type" &&
              attr.terms.some((term) => term.slug === selectedCat)
          )
        );
      const finishMatch =
        selectedFinish === "all" ||
        product.categories[1].slug === selectedFinish;
      const sizeMatch =
        selectedSize === "all" ||
        product.attributes[1].terms[0].name === selectedSize;
      const thicknessMatch =
        selectedThickness === "all" ||
        product.attributes[2].terms[0].name === selectedThickness;
      const colorMatch =
        selectedColor === "all" ||
        product.attributes[4].terms[0].name === selectedColor;
      const typeMatch =
        selectedType === "all" ||
        product.attributes[3].terms[0].name === selectedType;
      console.log("Checking Product:", product); // Log each product being checked
      console.log(
        "Matches Filters:",
        brandMatch,
        "CategoryMatch",
        categoryMatch,
        "finish data",
        finishMatch,
        "size data",
        sizeMatch,
        "thickness data",
        thicknessMatch,
        "color match",
        colorMatch,
        typeMatch
      );

      return (
        tabMatch &&
        brandMatch &&
        categoryMatch &&
        finishMatch &&
        sizeMatch &&
        thicknessMatch &&
        colorMatch &&
        typeMatch
      );
    });
  }, [
    products,
    activeTab,
    selectedBrand,
    selectedCategory,
    selectedFinish,
    selectedSize,
    selectedThickness,
    selectedColor,
    selectedType, // Added selectedType to the dependencies of useMemo
  ]);

//   const lastIndex = pageNumber * itemsPerPage;
// const firstIndex = lastIndex - itemsPerPage;
// // Paginated data derived from filtered products
// const displayedData = filteredProducts1.length > 0
//   ? filteredProducts1.slice(firstIndex, lastIndex)
//   : [];
// Pagination Logic
const startIndex = (pageNumber - 1) * itemsPerPage;
const endIndex = pageNumber * itemsPerPage;
const paginatedProducts = useMemo(() => {
  return filteredProducts.slice(startIndex, endIndex);
}, [filteredProducts, pageNumber, itemsPerPage]);
// Displayed Data
const displayedData = paginatedProducts;

  const categoryMap = {
    "/product#xylem": "Xylem",
    "/product#royal-crown": "Royal Crown",
    "/product#crown": "crown",
    "/product#Qbiss": "QBliss",
    "/product#Crown_Xcl": "Crown XCL",
  };
  // const handleTabClick = (newTab, category) => {
  //   setSelectedTab(category);
  //   // setActiveTab(newTab);
  //   // const filteredData = products.filter((data) => data.category === category);
  //    // Filter the products based on the selected category
     
  //    const filteredData = products.filter((product) =>
  //     product.categories.some(
  //       (categoryItem) =>
  //         categoryItem.slug && categoryItem.slug === category
  //     )
  //   );
  //   console.log("ffff", filteredData);
  
    
  //   //  const filteredData = selectedCategory.length === 0 || products.filter((product) =>
  //   //   product.categories.some((categoryItem) => {
  //   //     // Ensure categoryItem.slug is defined before calling toLowerCase
  //   //     return categoryItem.slug && categoryItem.slug === category;
  //   //   })
  //   // );
  //   // debugger
  //   setCurrentData(filteredData); // Update current data based on selected category
  //   router.push(`/product#${category}`); // Update the URL hash (for client-side navigation)

  // };
  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);
  // };
  // const visibleTabs = [
  //   "Royal Crown",
  //   "Crown XCL",
  //   "QBliss",
  //   "Xylem",
  //   "crown",
  // ].filter(
  //   (category) =>
  //     activeTab === "" ||
  //     activeTab === `/product#${category.replace(" ", "-").toLowerCase()}`
  // );
  // const visibleTabs = ["Xylem", "Royal Crown", "Crown XCL", "QBliss", "crown"];
  const handleTabClick = (tab) => {
    setSelectedTag(tab.toLowerCase());
  };
  const visibleTabs = [
    "Royal Crown",
    "Crown XCL",
    "QBliss",
    "Xylem",
    "crown",
  ].filter(
    (category) =>
      activeTab === "" ||
      activeTab === `/product#${category.replace(" ", "-").toLowerCase()}`
  );
  // useEffect(() => {
  //   if (selectedTag === "all") {
  //     setFilteredProducts(products);
  //   } else {
  //     const filtered = products.filter((product) => {
  //       console.log("Checking product:", product); // Log each product
  //       return (
  //         product.type &&
  //         product.type.some((tag) => {
  //           console.log("Checking tag:", tag.slug, selectedTag); // Log each tag
  //           return tag.slug === selectedTag;
  //         })
  //       );
  //     });
  //     console.log("Filtered Products:", filtered); // Log the filtered result
  //     setFilteredProducts(filtered);
  //   }
  // }, [selectedTag, products]);
  // Thickness Click Handler

  useEffect(() => {
    console.log("Selected Tag:", selectedTag);
    console.log("Products Data:", products);
    // If selectedTag is 'all', just return all products
    let filtered = products;
    // Filter products based on the selectedTag
    if (selectedTag !== "all") {
      const actualTag = selectedTag.split('#')[1];  // Extracts tag name after '#'
      filtered = filtered.filter((product) => {
        if (Array.isArray(product.categories)) {
          // Check if any category slug matches the selectedTag
          return product.categories.some((category) => {
            return category.slug.toLowerCase() === actualTag.toLowerCase();
          });
        }
        return false;
      });
    }
    console.log("Filtered by selectedTag:", filtered);
    // Now apply the other filters (e.g., brand, size, etc.) to the filtered products
    filtered = filtered.filter((product) => {
      const brandMatch = selectedBrand === "all" || product.category === selectedBrand;
      const categoryMatch =
        selectedCategory.length === 0 ||
        selectedCategory.some((selectedCat) =>
          product.attributes.some(
            (attr) =>
              attr.name === "type" &&
              attr.terms.some((term) => term.slug === selectedCat)
          )
        );
      const finishMatch = selectedFinish === "all" || product.categories[1].slug === selectedFinish;
      const sizeMatch = selectedSize === "all" || product.attributes[1].terms[0].name === selectedSize;
      const thicknessMatch = selectedThickness === "all" || product.attributes[2].terms[0].name === selectedThickness;
      const colorMatch = selectedColor === "all" || product.attributes[4].terms[0].name === selectedColor;
      const typeMatch = selectedType === "all" || product.attributes[3].terms[0].name === selectedType;
      // Add more filters as necessary
      return (
        brandMatch &&
        categoryMatch &&
        finishMatch &&
        sizeMatch &&
        thicknessMatch &&
        colorMatch &&
        typeMatch
      );
    });
    console.log("Final Filtered Products:", filtered);
    // Update the state with filtered products
    setFilteredProducts(filtered);
  }, [
    selectedTag,
    products,
    selectedBrand,
    selectedCategory,
    selectedFinish,
    selectedSize,
    selectedThickness,
    selectedColor,
    selectedType, // Add other filter states as needed
  ]);
const handleThicknessClick = (thicknessValue) => {
  setSelectedThickness(prevThickness => prevThickness === thicknessValue ? "" : thicknessValue);
  const exploreCollectionElement = document.querySelector("#sticky_top");
  if (exploreCollectionElement) {
    exploreCollectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
   return (
    <>
      <div className="productMainContainer">
        <div className="productMain">
          <div className="productNumber">
            <p>{shortNumber}</p>
          </div>
          <div className="productDescription">
            <motion.div
              className="productDescriptionBorder"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }} // Adjust this width to fit your design
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="productDescriptionHeader">{shortTitle}</div>
            <div className="productDescriptionContent">
              <p>{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="first_top1">
        <div id="sticky_top" className="products_name">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Explore Collection
          </motion.div>
          <div className="products-tabs" id="sticky_top">
            {/* {visibleTabs.map((label) => (
              <Link
                key={label}
                href={`/product#${label.replace(" ", "-")}`}
                scroll={false}
                className={`tab-item ${
                  selectedTab === label ? "active" : ""
                }`}
                onClick={() => handleTabClick(label)}
                // className={`tab-item ${
                //   activeTab ===
                //   `/product#${label.replace(" ", "-").toLowerCase()}`
                //     ? "active"
                //     : ""
                // }`}
                // onClick={() =>
                //   handleTabClick(
                //     `/product#${label.replace(" ", "-").toLowerCase()}`,
                //     label
                //   )
                // }
              >
                <div className="tab-content-inner">{label}</div>
              </Link>
            ))} */}
            {visibleTabs.map((label) => (
    <Link
      key={label}
      href={`/product#${label.replace(" ", "-").toLowerCase()}`}
      scroll={false}
      className={`tab-item ${
        activeTab === `/product#${label.replace(" ", "-").toLowerCase()}`
          ? "active"
          : ""
      }`}
      onClick={() => handleTabClick(`/product#${label.replace(" ", "-").toLowerCase()}`, label)} // Use the new handleTabClick
    >
      <div className="tab-content-inner">{label}</div>
    </Link>
  ))}
          </div>
        </div>

        <div className="supply">
          <div id="sticky">
            <div className="dropdown1">
              <div className="dropdown-label">
                <label className="colorSelectDropdown" htmlFor="type-select">
                  SELECT TYPE
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="tag-select"
                  options={categories}
                  value={selectedType}
                  onChange={handleTypeChange}
                  placeholder="Select Type"
                  className="category-select"
                />
              ) : (
                <div className="dropdown-label" id="dropdownLabel">
                  {categories.map((category) => (
                    <label key={category.value} className="checkbox-container">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id={category.value}
                        value={category.value}
                        checked={selectedCategory.includes(category.value)}
                        onChange={handleCategoryChange}
                      />
                      <span class="checkmark"></span>
                      {category.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="color-select" className="colorSelectDropdown">
                  SELECT COLOR
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  className="color-select"
                  options={mappedColor}
                  value={selectedColor}
                  onChange={handleColorChange1}
                  placeholder="Select Color"
                />
              ) : (
                <div className="color_dropdown">
                  {color.map((colorItem, index) => (
                    <div
                      key={index} 
                      className={`color-box color${index + 1}`}
                      // style={{ backgroundColor: colorItem.value }}
                      onClick={() => handleColorChange(colorItem.value)} // Add color change functionality
                    ></div>
                  ))}
                </div>
              )}
            </div>
            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="size-select" className="colorSelectDropdown">
                  SELECT SIZE
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="size-select"
                  className="color-select"
                  options={size}
                  value={selectedSize}
                  onChange={handleSizeChange}
                  placeholder="Select a Size"
                />
              ) : (
                <div className="color_dropdown">
                  {size.map((sizeOption) => (
                    <div
                      key={sizeOption.value}
                      className={`SizeProduct ${
                        selectedSize === sizeOption.value ? "selected" : ""
                      }`}
                      onClick={() => handleSizeClick(sizeOption.value)}
                    >
                      <p>{sizeOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label
                  htmlFor="thickness-select"
                  className="colorSelectDropdown"
                >
                  SELECT THICKNESS
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="thickness-select"
                  className="color-select"
                  options={thickness}
                  value={selectedThickness}
                  onChange={handleThicknessChange}
                  placeholder="Select Thickness"
                />
              ) : (
                <div className="color_dropdown">
                  {thickness.map((thicknessOption) => (
                    <div
                      key={thicknessOption.value}
                      className={`ThicknessProduct ${
                        selectedThickness === thicknessOption.value
                          ? "selected"
                          : ""
                      }`}
                      // onClick={() =>
                      //   setSelectedThickness(thicknessOption.value)
                      // }
                      onClick={() => handleThicknessClick(thicknessOption.value)} // Add click functionality
                    >
                      <p>{thicknessOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {loading ? (
            // <div className="skeleton-loader">
            <Grid container spacing={2}>
              {/* Render exactly 25 skeletons in the grid */}
              {Array.from({ length: 25 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                </Grid>
              ))}
            </Grid>
          ) : (
          <div className="product_container" ref={projectsRef}>
            {/* {filteredProducts.map((product, index) => ( */}
            {displayedData.map((product, index) => {
              // const isTabActive = !!activeTab;

              // Only apply "big" or "tall" classNames if not in the tab view
              const className =
              //  isTabActive
                // ? "" // Normal size for tab view
                // : 
                index === 9
                ? "big"
                : [0, 2, 3, 8, 9, 10, 12, 13, 14, 17, 18, 20, 21].includes(
                    index
                  )
                ? "tall"
                : "";

              return (
                <div key={index} className={`AboutUs_product ${className}`}>
                  <Image
                    src={product.images[0].src}
                    alt={product.name}
                    className="ProductImage"
                    width={500}
                    height={600}
                    // height={randomHeight} // Apply dynamic height
                    // style={{ height: `${randomHeight}px` }} // Inline style for random height
                  />
                  <div className="overlay">
                    <div>
                      <svg
                        width="40"
                        height="40"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="white"
                        className="aboutUsProductSvg"
                      >
                        <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                      </svg>
                    </div>
                    <div
                      className="AnchorTag"
                      onClick={() => {
                        console.log("Product ID:", product.id);
                        router.push(`/product-information#${product.id}`);
                      }}
                    >
                      Know More
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
           )}
        </div>
        {currentData.length > 0 && (
          <div>
            <Stack spacing={2} justifyContent="center">
              <Pagination
                count={Math.ceil(currentData.length / itemsPerPage)}
                color="primary"
                shape="rounded"
                page={pageNumber}
                size="small"
                variant="outlined"
                onChange={handlePageChange}
                hidePrevButton
                hideNextButton
                sx={{
                  "& .MuiPaginationItem-root": {
                    backgroundColor: "transparent",
                    border: "1px solid #5b3524",
                    color: "#5b3524",
                    margin: "0 10px",
                    padding: "18px 13px",
                    fontSize: "20px",
                    borderRadius: "0px",
                    transition: "background-color 0.3s, color 0.3s",

                    "@media (max-width: 768px)": {
                      margin: "0 9px",
                      padding: "12px 8px",
                      fontSize: "15px",
                    },

                    "@media (max-width: 425px)": {
                      margin: "0 8px",
                      padding: "12px 8px",
                      fontSize: "12px",
                    },

                    "&.Mui-selected": {
                      backgroundColor: "#5b3524",
                      margin: "0 10px",
                      padding: "18px 13px",
                      fontSize: "20px",
                      color: "white",
                      border: "none",

                      "@media (max-width: 768px)": {
                        margin: "0 9px",
                        padding: "12px 10px",
                        fontSize: "15px",
                      },

                      "@media (max-width: 425px)": {
                        margin: "0 8px",
                        padding: "12px 10px",
                        fontSize: "12px",
                      },
                    },

                    "&.Mui-selected:hover": {
                      backgroundColor: "#c1c0c0",
                      color: "black",
                      border: "none",
                    },
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>
    </>
  );
};
export default Page;
