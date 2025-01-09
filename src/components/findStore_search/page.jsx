"use client";
import { useState } from "react";
import Image from "next/image";
import { locationsData } from "./storeData";
// import ImageLogo from "../../images/svgLogos/header_logo.svg";
// import ImageLogo1 from "../../images/svgLogos/FinalHeaderLogo.svg";
// import ImageLogo2 from "../../images/svgLogos/header_logo.svg";
// import ImageLogo3 from "../../images/svgLogos/FinalHeaderLogo.svg";
import styles from "@/components/findStore_search/findStore_search.module.css";
import "./findStore.css";
import FindStoreButton from "../buttons/findstoreButton/findstoreButton";
import Link from "next/link";
function FindStoreSearch() {
  const defaultCityData = [
    {
      content1:
        "HEAD OFFICE",
      supplierName: " ",
      mapLocation: "Ahmedabad, Gujarat",
      phone: "+91 (79) 4001 7979",
      Address: "One 42, 401 North Tower, Near Jayantilal Park BRTS, Ambli Bopal Road",
      // extraPhone: "fdfdfdfdfd",
      emailId: "marketing@royalcrown.com",
    },
    {
      content1: "FACTORY ADDRESS",
      supplierName: " ",
      mapLocation: "Ahmedabad, Gujarat",
      phone: " +91 9537949494",
      Address: "Crown Decor Pvt. Ltd. Survey no. 419/1,Radhe Industrial Estate,Tajpur Road, Changodar-382 213",
      extraPhone: "+91 7878252343",
      emailId: "marketing@royalcrown.com",
    },
    // {
    //   content1: "MA UMIYA PLYWOOD & HARDWARE",
    //   supplierName: "MR. PATEL SURESH PRAHLADBHAI",
    //   mapLocation: "AHMEDABAD, GUJARAT",
    //   phone: "+919879830339",
    //   Address:
    //     "GROUND FLOOR SHOP NO.5, MADHAV ORCHID, S P RING RPAD, NAVA ODHAV",
    //     emailId: "marketing@royalcrown.com",
    // },
    // {
    //   content1: "WOODLINK",
    //   supplierName: "MR. RAHUL PATEL",
    //   mapLocation: "AHMEDABAD, GUJARAT",
    //   phone: "+919925033905",
    //   Address:
    //     "SURVEY NO.3/1, NEAR RAMDEV MASALA, SOLA BRIDGE CORNER, SOLA",
    //     emailId: "marketing@royalcrown.com",
    // },
    // {
    //   content1: "R D THAKKAR AND SONS",
    //   supplierName: "MR. PRAKASH THAKKAR",
    //   mapLocation: "AHMEDABAD, GUJARAT",
    //   phone: "+919879750098",
    //   Address: "1062/N/2/A, SAHKARI LATI BAZAR PART-1, JAGANNATHJI ROAD",
    //   emailId: "marketing@royalcrown.com",
    // },
  ];

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const options1 = [
    "GUJARAT",
    "TELANGANA",
    "KARNATAKA",
    "MADHYAPRADESH",
    "WESTBENGAL",
    "BIHAR",
    "HARYANA",
    "MAHARASHTRA",
    "TAMILNADU",
    "UTTARPRADESH",
    "NEWDELHI",
    "JHARKHAND",
    "ODISHA",
    "RAJASTHAN",
    "ANDHRAPRADESH",
    "ASSAM",
    "PUNJAB",
    "NEPAL",
    "CHHATTISGARH",
    "CHANDIGARH",
    
  ];
  const [sortedStates] = useState(options1.sort());

  const stateDistricts = [
    {
      state: "GUJARAT",
      districts: [
        "AHMEDABAD",
        "SURAT",
        "BARODA",
        "ANAND",
        "BHUJ",
        "RAJKOT",
      ],
    },
    {
      state: "TELANGANA",
      districts: ["HYDERABAD"],
    },
    {
      state: "KARNATAKA",
      districts: [
        "BANGALORE",
        "HUBALI",
      ],
    },
    {
      state: "MADHYAPRADESH",
      districts: [
        "BHOPAL",
        "INDORE",
      ],
    },
    {
      state: "WESTBENGAL",
      districts: [
        "KOLKATA",
      ],
    },
    {
      state: "BIHAR",
      districts: ["PATNA",],
    },

    { state: "HARYANA", districts: ["KAITHAL","PANIPATH","HISSAR"] },
    {
      state: "MAHARASHTRA",
      districts: [
        "MUMBAI",
        "DHULE",
        "NASIK",
        "THANE",
        "PUNE",
        "NAGPUR",
      ],
    },
    {
      state: "TAMILNADU",
      districts: ["CHENNAI"],
    },
    { state: "UTTARPRADESH", districts: ["LUCKNOW","ALIGARH"] },
    {
      state: "NEWDELHI",
      districts: [
        "DELHI",
      ],
    },
    { state: "JHARKHAND", districts: ["RACHI"] },
    { state: "ODISHA", districts: ["BHUBANESHWAR"] },
    {
      state: "RAJASTHAN",
      districts: ["JAIPUR"],
    },
    {
      state: "ANDHRAPRADESH",
      districts: [
        "VIJAYWADA",
        "VISAKHAPATNAM",
      ],
    },
    { state: "ASSAM", districts: ["GUWAHATI"] },
    { state: "PUNJAB", districts: ["LUDHIANA", "AMRITSAR", "MANSA"] },
    {
      state: "NEPAL",
      districts: ["NEPAL"],
    },
    {
      state: "CHHATTISGARH",
      districts: [
        "RAIPUR",
      ],
    },
    {
      state: "CHANDIGARH",
      districts: ["CHANDIGARH"],
    },
  ];
  stateDistricts.sort((a, b) => a.state.localeCompare(b.state));

  // Sort the districts array within each state alphabetically
  stateDistricts.forEach((state) => {
    state.districts.sort((a, b) => a.localeCompare(b));
  });

  // console.log(stateDistricts);

  const options2 =
    stateDistricts.find((item) => item.state === selectedOption1)?.districts ||
    [];
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedLocationContent, setSelectedLocationContent] =
    useState(defaultCityData);

  // const [selectedLocationContent, setSelectedLocationContent] = useState([
  //   {
  //     content1:
  //       "Please select State and City to search Experience Centre near your location.",
  //   },
  // ]);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen2) setIsOpen2(false);
  };

  const handleOptionClick1 = (option) => {
    if (selectedOption1 !== option) {
      setSelectedOption2("");
    }

    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen1) setIsOpen1(false);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };
  const handleSearch = () => {
    if (!selectedOption1 || !selectedOption2) {
      alert("Please select both State and City");
      return;
    }
    updateSelectedLocationContent();
  };

  const updateSelectedLocationContent = () => {
    if (!selectedOption1 || !selectedOption2) {
      setSelectedLocationContent([
        {
          content1: "Please select both State and City",
        },
      ]);
      return;
    }

    const selectedLocations =
      locationsData[selectedOption1] &&
      locationsData[selectedOption1][selectedOption2]
        ? locationsData[selectedOption1][selectedOption2]
        : null;

    if (selectedLocations) {
      setSelectedLocationContent(selectedLocations);
    } else {
      setSelectedLocationContent([
        {
          content1:
            "No Experience Centre found in selected location. Send us a message if you need any help!",
        },
      ]);
    }
  };

  return (
    <div className={styles.Map_section}>
      <div className={styles.Map_section_outer}>
        {/* Map Section */}
        <div className={styles.Map_Section_Iframe_Outer}>
          <div className={styles.content70}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0578930659026!2d72.49071127591135!3d22.984898517731924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aeb23c7e7e7%3A0xd34044573492f3c0!2sRoyal%20Art%20Laminates!5e0!3m2!1sen!2sin!4v1720691503627!5m2!1sen!2sin"
              allowfullscreen=""
              className={styles.map_frame}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Selection Section */}
        <div className={styles.map_section2}>
          {/* <div className={styles.Img_Logo_Outer}>
            <Image src={ImageLogo} className={styles.Img_Logo} />
          </div> */}
          <div className={styles.Option_Sec_Outer}>
            <div className={styles.option_section}>
              <div
                className={`${styles.select_menu} ${
                  isOpen1 ? styles.active : ""
                }`}
                onClick={toggleDropdown1}
              >
                <div className={styles.select_btn} onClick={toggleDropdown1}>
                  <div className={styles.sBtn_text}>
                    {selectedOption1 || "Select State"}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="14"
                    viewBox="0 0 22 14"
                    fill="none"
                  >
                    <path
                      d="M2 2L11 11L20 2"
                      stroke="#5B3524"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <ul className={styles.options}>
                  {sortedStates.map((option, index) => (
                    <li
                      key={index}
                      className={styles.option}
                      onClick={() => handleOptionClick1(option)}
                    >
                      <span className={styles.option_text}>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${styles.select_menu} ${
                  isOpen2 ? styles.active : ""
                }`}
                onClick={toggleDropdown2}
              >
                <div className={styles.select_btn} onClick={toggleDropdown2}>
                  <div className={styles.sBtn_text}>
                    {selectedOption2 || "Select City"}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="14"
                    viewBox="0 0 22 14"
                    fill="none"
                  >
                    <path
                      d="M2 2L11 11L20 2"
                      stroke="#5B3524"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <ul className={styles.options}>
                  {options2.map((option, index) => (
                    <li
                      key={index}
                      className={styles.option}
                      onClick={() => handleOptionClick2(option)}
                    >
                      <span className={styles.option_text}>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <FindStoreButton
                btn_text={"Search"}
                OnClickSearch={handleSearch}
              />
              {/* <div className={styles.button_OUTER}>
                <span className={styles.search_button} onClick={handleSearch}>
                  Search
                </span>
              </div> */}
            </div>
          </div>
          <div className={styles.content30}>
            {selectedLocationContent.map((location, index) => (
              <>
                <div key={index}>
                  {location.mapLocation &&
                    location.phone &&
                    location.supplierName &&
                    location.emailId && (
                      <div className={styles.main_section_outer}>
                        <div className={styles.main_content_inner}>
                          <p className={styles.content_1}>
                            {location.content1}
                          </p>
                          {/* Display mapLocation and phone only if available */}
                          {/* Address */}
                          <div className={styles.content}>
                            <div className={styles.address}>
                              {location.Address}
                            </div>
                          </div>
                          {/* Map-lOCATION (aHMEDABAD,gUJARAT) */}
                          <div className={styles.content}>
                            <div className={styles.address}>
                              {location.mapLocation}
                            </div>
                          </div>
                        </div>

                        {/* Supplier contact name */}
                        <div className={styles.main_content_inner_two}>
                          <div className={styles.content1}>
                            <div className={styles.address}>
                              <p> {location.supplierName}</p>
                            </div>
                          </div>
                          <div className={styles.content1}>
                            <div className={styles.address}>
                            <Link href={`tel:${location.phone}`}>{location.phone}</Link>
                              {/* {location.phone} */}
                            </div>
                          </div>
                          {/* extra mobile number if required */}
                          {location.extraPhone && (
                            <div className={styles.content}>
                              <div className={styles.address}>
                                <Link href={`tel:${location.extraPhone}`}>{location.extraPhone}</Link>
                              </div>
                            </div>
                          )}
                          <div className={styles.content1}>
                            <div className={styles.address}>
                              <Link href={`mailto:${location.emailId}`}>
                                <span>{location.emailId}</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {location.mapLocation && location.phone && (
                    <div className={styles.content_border}>
                      {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.SvgLogo}
                      height="1"
                      viewBox="0 0 371 2"
                      fill="none"
                    >
                      <path d="M0.5 1H371" stroke="#CFB071" strokeWidth="1" />
                    </svg> */}
                    </div>
                  )}
                </div>
              </>
            ))}
            {/* <div className={styles.ImageSection}>
              <div>
                <Image src={ImageLogo} alt="none" />
              </div>
              <div>
                <Image src={ImageLogo1} alt="none" />
              </div>
              <div>
                <Image src={ImageLogo2} alt="none" />
              </div>
              <div>
                <Image src={ImageLogo3} alt="none" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindStoreSearch;
