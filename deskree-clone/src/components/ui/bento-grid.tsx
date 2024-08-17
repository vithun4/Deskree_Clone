import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        "md:auto-rows-min",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  classColor,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  classColor?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 min-h-[18rem]", // Ensure consistent height
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col flex-grow">
        <div className="w-full h-auto mb-4 items-center">
          {icon}
        </div>
        <div
          className="font-bold mb-2 mt-2 text-start text-2xl"
          style={{ color: classColor }}
        >
          {title}
        </div>
        <div
          className="text-block-10 text-start"
          style={{ color: classColor }}
        >
          {description}
        </div>
        <div className="flex text-block-11 mt-auto">
          {"Learn more ->"}
        </div>
      </div>
    </div>
  );
};
