import type { ClassNames } from "./utils.type";

export const classNames: ClassNames = (dynamicObj, staticArray) => {
  const dynamicArray = Object.entries(dynamicObj).reduce<string[]>(
    (acc, [key, value]) => {
      value && acc.push(key);
      return acc;
    },
    [],
  );

  return `${dynamicArray.join(" ")} ${(staticArray || []).join(" ")}`.trim();
};
