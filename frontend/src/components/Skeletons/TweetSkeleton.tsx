import ContentLoader from "react-content-loader";

const TweetSkeleton = () => (
  <ContentLoader
    speed={2}
    width={560}
    height={225}
    viewBox="0 0 560 225"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="70" cy="66" r="40" />
    <rect x="131" y="32" rx="4" ry="4" width="95" height="22" />
    <rect x="238" y="32" rx="4" ry="4" width="182" height="22" />
    <rect x="133" y="70" rx="4" ry="4" width="400" height="111" />
    <circle cx="271" cy="205" r="11" />
    <circle cx="151" cy="205" r="11" />
    <circle cx="389" cy="205" r="11" />
    <circle cx="511" cy="204" r="11" />
  </ContentLoader>
);

export default TweetSkeleton;
