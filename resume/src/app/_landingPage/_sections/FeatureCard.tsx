interface Props {
  title: string;
  description: string;
  hoverClass: string;
}

export const FeatureCard = ({ title, description, hoverClass = "" }: Props) => {
  return (
    <div
      className={`group flex h-32 sm:h-52 flex-col items-center justify-center border-4 border-primary-color px-[5%] text-center text-primary-color text-white hover:bg-primary-color hover:transition-all ${hoverClass}`}
    >
      <h2 className="max-w-xs text-sm text-xl font-bold text-primary-color group-hover:text-white sm:text-xl">
        {title}
      </h2>
      <p className="none sm:font-base max-w-xs text-xs">{description}</p>
    </div>
  );
};
