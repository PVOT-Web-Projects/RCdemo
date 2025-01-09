"use client"
import { useEffect } from "react";
import Vigil_Privacy_policy from "@/components/vigilpolicyData/page";
// import PrivacyPolicyImg from "@/components/privacypolicyheader/page";
import VigilPrivacyPolicyImg from "@/components/vigilprivacypolicyheader/page";

const VigilMechanismPolicy =() =>{
    useEffect(() => {
        document.title = "Vigil Mechanism Policy | Royal Crown";
      });
    return(
        <div>
            <VigilPrivacyPolicyImg />
            {/* <PrivacyPolicyImg /> */}
            <Vigil_Privacy_policy />
        </div>
    )
}
export default VigilMechanismPolicy;