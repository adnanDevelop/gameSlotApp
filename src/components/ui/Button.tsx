import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const variants =
    className === "primary"
      ? "lg:px-[50px] md:px-[40px] px-[25px] uppercase lg:py-[14px] py-[10px] lg:text-[20px] text-sm rounded-sm overflow-hidden font-semibold bg-tranpsarent text-black relative before:absolute before:w-full before:h-full before:z-[-1] before:top-0 before:left-0 before:bg-yellow before:transitions transitions before:[clip-path:polygon(0%_0%,100%_0%,100%_100%,10%_100%,0%_75%)] after:absolute after:w-[100px] after:h-[10px] after:rounded-tl-sm after:rounded-tr-sm after:bg-black after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:z-[-1] after:transitions hover:scale-[1.04]"
      : "lg:px-[50px] md:px-[40px] px-[25px] uppercase lg:py-[14px] py-[10px] lg:text-[20px] text-sm rounded-sm overflow-hidden font-semibold bg-transparent text-black relative before:absolute before:w-full before:h-full before:z-[-1] before:top-0 before:left-0 before:bg-white before:transitions transitions before:[clip-path:polygon(0%_0%,100%_0%,100%_70%,90%_100%,0%_100%)] after:absolute after:w-[100px] after:h-[10px] after:rounded-tl-sm after:rounded-tr-sm after:bg-black after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:z-[-1] after:transitions hover:scale-[1.04] ";

  return <button className={variants}>{children}</button>;
};

export default Button;
