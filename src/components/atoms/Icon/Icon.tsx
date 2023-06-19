import classnames from "classnames";
import styles from "./icon.module.scss";
import ArrowDown from "./icons/ArrowDown";
import ArrowRight from "./icons/ArrowRight";
import ArrowLeft from "./icons/ArrowLeft";
import Check from "./icons/Check";
import Close from "./icons/Close";
import Info from "./icons/Info";
import Measurement from "./icons/Measurement";
import Phone from "./icons/Phone";
import Filter from "./icons/Filter";
import PersonOne from "./icons/PersonOne";
import PersonMultiple from "./icons/PersonMultiple";
import TypeFold from "./icons/TypeFold";
import TypeRoll from "./icons/TypeRoll";
import TypeStairs from "./icons/TypeStairs";
import WidthSingle from "./icons/WidthSingle";
import WidthPlus from "./icons/WidthPlus";
import WidthDouble from "./icons/WidthDouble";
import CircleArrowUp from "./icons/CircleArrowUp";

const icons = {
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  "arrow-down": ArrowDown,
  "circle-arrow-up": CircleArrowUp,
  phone: Phone,
  info: Info,
  close: Close,
  check: Check,
  filter: Filter,
  measurement: Measurement,
  personOne: PersonOne,
  personMultiple: PersonMultiple,
  typeFold: TypeFold,
  typeRoll: TypeRoll,
  typeStairs: TypeStairs,
  widthSingle: WidthSingle,
  widthPlus: WidthPlus,
  widthDouble: WidthDouble,
};

export const Icon = ({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) => {
  const Icon = icons[name];

  return (
    <i className={classnames("icon", styles.icon, className)}>
      <Icon />
    </i>
  );
};
