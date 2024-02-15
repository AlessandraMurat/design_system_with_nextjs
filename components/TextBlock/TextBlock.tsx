export type TextBlockProps = {
  title: string;
  description: string;
  className?: string;
};

const TextBlock = ({ title, description, className }: TextBlockProps) => {
  return (
    <div
      className={`
          flex flex-col justify-center items-start py-6 pr-5 pl-8 gap-3 bg-dark rounded-md
          ${className}
        `}
    >
      <h3 className="text-gray-primary font-extrabold text-xl">{title}</h3>
      <p className="text-gray-primary font-normal text-md">{description}</p>
    </div>
  );
};
export default TextBlock;
