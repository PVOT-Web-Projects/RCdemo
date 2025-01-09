
import "./decorativelaminates.scss";
import StandaradGradeLaminates from "@/components/ProductsComponenetsInner/standardgradeLaminatesInner/standardGradeLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const StandardGradeLaminates = () => {
  return (
    <>
      <ProductsCommonInnerPage data={StandaradGradeLaminates} />
    </>
  );
};
export default StandardGradeLaminates;