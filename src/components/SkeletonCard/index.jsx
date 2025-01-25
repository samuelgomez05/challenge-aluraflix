import 'ldrs/dotSpinner'

const SkeletonCard = ({ bgColor }) => {
  return (
    <div className={`${bgColor} bg-opacity-10 relative flex animate-pulse flex-col overflow-hidden rounded-md p-1`}>
      <div className="aspect-video w-full rounded-md"></div>
      <div className="h-[11.5rem] p-4 md:h-[12.5rem]"></div>
      <div className="absolute inset-0 flex size-full items-center justify-center">
        <l-dot-spinner
          size="45"
          speed="0.9"
          color="white" 
        ></l-dot-spinner>
      </div>
    </div>
  );
};

export default SkeletonCard;