import type { ReactNode } from "react";

type Props = {
  col: number;
  children: ReactNode;
};

export const Column: React.FC<Props> = ({ col, children }) => {
  const classArray = [
    "sm:column-width-[1,12,12]",
    "sm:column-width-[2,12,12]",
    "sm:column-width-[3,12,12]",
    "sm:column-width-[4,12,12]",
    "sm:column-width-[5,12,12]",
    "sm:column-width-[6,12,12]",
    "sm:column-width-[7,12,12]",
    "sm:column-width-[8,12,12]",
    "sm:column-width-[9,12,12]",
    "sm:column-width-[10,12,12]",
    "sm:column-width-[11,12,12]",
    "sm:column-width-[12,12,12]",
  ];

  const classFix = classArray[col - 1];
  // const classFix = col === 3 ? `column-width-[3,12]` : `column-width-[5,12]`;
  return <div className={classFix}>{children}</div>;
};
