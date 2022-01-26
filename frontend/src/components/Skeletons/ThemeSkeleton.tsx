import ContentLoader from "react-content-loader";

const ThemeSkeleton = () => (
  <ContentLoader
    speed={2}
    width={360}
    height={520}
    viewBox="0 0 360 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="38" y="40" rx="6" ry="6" width="315" height="415" />
  </ContentLoader>
);

export default ThemeSkeleton;
