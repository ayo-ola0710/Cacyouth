interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton = ({
  width = "100%",
  height = "100%",
  className = "",
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
