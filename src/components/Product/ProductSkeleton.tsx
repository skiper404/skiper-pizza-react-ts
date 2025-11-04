import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const ProductSkeleton: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="170" cy="140" r="120" />
    <rect x="24" y="270" rx="10" ry="10" width="290" height="20" />
    <rect x="20" y="300" rx="10" ry="10" width="300" height="100" />
    <rect x="20" y="420" rx="10" ry="10" width="90" height="30" />
    <rect x="180" y="410" rx="10" ry="10" width="140" height="50" />
  </ContentLoader>
);

export default ProductSkeleton;
