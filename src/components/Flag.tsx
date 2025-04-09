import type { StaticImageData } from "next/image";
import _flagsSvg from "../../public/flags.svg";
import { ProgrammingLanguage } from "~/utils/languages";

const flagsSvg = _flagsSvg as StaticImageData;

export const Flag = ({
  language,
  width = 84,
}: {
  language: ProgrammingLanguage
  width?: number;
}) => {
  const height = width * (19.3171 / 24);

  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <image
        height={flagsSvg.height}
        href={flagsSvg.src}
        width={flagsSvg.width}
      />
    </svg>
  );
};