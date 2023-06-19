import { FC } from "react";
import { Filter } from "../../../types/filter.type";
import styles from "./FilterComponent.module.scss";
import { Heading } from "../../atoms/Heading/Heading";
import Tooltip from "../../atoms/Tooltip/Tooltip";
import { DynamicFilterComponent } from "./DynamicFilterComponent";
import { ArrowFilterValue } from "../../../context/arrowFilter";

export type FilterComponentProps = {
  filter: Filter;
  value: string;
  onChange: (newValue: ArrowFilterValue) => void;
  canReset?: boolean;
};

export const FilterComponent: FC<FilterComponentProps> = (props) => {
  const { filter, value, onChange, canReset } = props;

  if (filter.values.length < 2) {
    return <></>;
  } else {
    return (
      <div key={filter.name} className={styles.filter}>
        <Heading heading={4} className={styles.title}>
          {filter.title}
          <Tooltip
            modalHeading={filter.title}
            modalContent={filter.text ? filter.text : filter.info}
            textVersion={true}
          ></Tooltip>
        </Heading>

        <DynamicFilterComponent
          filter={filter}
          value={value}
          onChange={onChange}
          canReset={canReset}
        />
      </div>
    );
  }
};
