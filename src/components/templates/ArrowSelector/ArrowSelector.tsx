import { Container } from "../../atoms/Container/Container";
import { Grid } from "../../atoms/Grid/Grid";
import Heading from "../../atoms/Heading/Heading";
import { Intro } from "../../molecules/Intro/Intro";
import { ArrowItem } from "../../molecules/ArrowItem/ArrowItem";
import { Bottombar } from "../../molecules/Bottombar/Bottombar";
import { Topbar } from "../../molecules/Topbar/Topbar";
import styles from "./ArrowSelector.module.scss";
import { useTranslation } from "react-i18next";
import useAPI from "../../../hooks/useApi/useApi";
import { useState, useMemo, useCallback } from "react";
import { ArrowOverviewItem } from "../../../types/arrowOverview.type";
import { useGranularEffect } from "../../../hooks/useGranularEffect";
import axios from "axios";
import { Filters } from "../../molecules/Filters/Filters";
import { ActiveFilters, Filter } from "../../../types/filter.type";
import { FilterComponent } from "../../molecules/Filters/FilterComponent";
import Loader from "../../atoms/Loader/Loader";
import Contact from "../../molecules/Contact/Contact";
import { Icon } from "../../atoms/Icon/Icon";
import { ArrowFilterProvider } from "../../../context/arrowFilter";
import ResetButton from "../../atoms/ResetButton/ResetButton";

type ValueList = string | number | string[];

export const ArrowSelector = () => {
  const { t } = useTranslation();
  const [arrowList, setArrowList] = useState<ArrowOverviewItem[]>([]);

  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    max_distance: {
        active: false,
        value: [],
    },
    filter_point: {
      active: false,
      value: [],
    },
    filter_type: {
      active: false,
      value: [],
    },
    filter_width: {
      active: false,
      value: [],
    },
    filter_series: {
      active: false,
      value: [],
    },
  });
  const [arrowFilters, setArrowFilters] = useState<Filter[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>();
  const [filtersFolded, setFiltersFolded] = useState<Boolean>(false);
  const [abortController, setAbortController] =
    useState<AbortController | null>();
  const api = useAPI();

  useGranularEffect(
    () => {
      (async () => {
        setIsLoading(true);

        if (abortController) abortController.abort();

        const newAbortController = new AbortController();
        setAbortController(newAbortController);

        axios
          .all([
            api.get(`/configurator/products`),
            api.get(
              `/configurator/filtercategory`
            ),
          ])
          .then(
            axios.spread((arrowResponse, filterResponse) => {
              if (arrowResponse?.data) {
                setArrowList(arrowResponse.data.arrows);
              }
              if (filterResponse?.data) {
                setArrowFilters((state) => {
                  const newState: Filter[] = Object.values(
                    filterResponse?.data
                  ) as any as Filter[];

                  setIsLoading(false);
                  return newState;
                });
              }
            })
          )
          .catch(() => {});
      })();
    },
    [],
    [abortController, isLoading]
  );

  const getFilteredList = (
    arrowList: ArrowOverviewItem[],
    activeFilters: ActiveFilters
  ) => {
    let filteredList = arrowList;

    //Filter arrowlist by selected filters
    for (const keyTemp in activeFilters) {
      const key = keyTemp as keyof ActiveFilters;
      if (activeFilters[key].active) {
        key === "max_distance"
          ? (filteredList = filteredList.filter((arrow) => {
              return arrow.variants.some((variant) => {
                return variant.attributes[key]
                  ? variant.attributes[key].value >= activeFilters[key].value
                  : false;
              });
            }))
          : (filteredList = filteredList.filter((arrow) => {
              const filterValue = activeFilters[key].value;
              const arrowValue = arrow.attributes[key].value;

              const empty: ValueList[] = [];
              const result = empty.concat(filterValue).reduce((acc, curr) => {
                return acc && empty.concat(arrowValue).indexOf(curr) >= 0;
              }, true);

              return result;
            }));
      }
    }
    return filteredList;
  };

  const disableFilters = (
    filters: Filter[],
    arrowList: ArrowOverviewItem[]
  ) => {
    let filteredList = arrowList;
    let arrowListFilterValues: ValueList[] = [];

    for (const keyTemp in activeFilters) {
      const key = keyTemp as keyof ActiveFilters;
      //retrieve all possible filterable values from arrowlist so non-existent values may be disabled in filter options
      // eslint-disable-next-line no-loop-func
    }

    const filterlist = filters.map((filter) => {
      const newFilterValues = filter.values.map((value) => {
        let newValues;
        if (arrowListFilterValues.indexOf(value.value) === -1) {
          newValues = { ...value, disabled: true };
        } else {
          newValues = { ...value };
        }

        return newValues;
      });

      return { ...filter, values: newFilterValues };
    });

    return filterlist;
  };

  const handleFilterChange = (attr: string) => (value: any) => {
    const key = attr as keyof ActiveFilters;

    !activeFilters[key].active && value !== ""
      ? setActiveFilters((state: ActiveFilters) => ({
          ...state,
          [key]: {
            active: true,
            value: value,
          },
        }))
      : setActiveFilters((state: ActiveFilters) => ({
          ...state,
          [key]: {
            active: false,
            value: [],
          },
        }));
  };

  const foldFilters = () => {
    setFiltersFolded(!filtersFolded);
  };


  const filterValue = useCallback(
    (filtername: string) => {
      return activeFilters[
        filtername as keyof ActiveFilters
      ]?.value?.toString();
    },
    [activeFilters]
  );

  const filteredArrows = useMemo(() => {
    return getFilteredList(arrowList, activeFilters);
  }, [arrowList, activeFilters]);

  const enabledFilters = useMemo(() => {
    return disableFilters(arrowFilters, filteredArrows);
  }, [arrowFilters, filteredArrows]);

  return (
    <div>
      <Topbar />
      <Container className={styles.container}>
        <Grid className={styles.grid}>
          {isLoading ? (
            <Loader />
          ) : (
            <ArrowFilterProvider>
              <div className={styles.filters}>
                <div className={styles.heading}>
                  <Heading heading={3}>{t("filter.title")}</Heading>
                  {/* Hide reset until bug fixed */}
                  <ResetButton
                    className={styles.reset}
                    buttonText={t("filter.remove")}
                  />
                </div>
                <Filters fold={filtersFolded}>
                  <button
                    type="button"
                    onClick={foldFilters}
                    className={styles.toggle}
                  >
                    <span>{t("filter.show")}</span>
                    <span>{t("filter.hide")}</span>
                    <Icon name="filter" className={styles.previousIcon} />
                  </button>
                  {enabledFilters.map((filter) => (
                    <FilterComponent
                      value={filterValue(filter.name)}
                      onChange={handleFilterChange(filter.name)}
                      filter={filter}
                      key={filter.name}
                      canReset={true}
                    />
                  ))}
                  <span className={styles.results}>
                    {t("arrowing_section.filter_results", {
                      results: filteredArrows?.length,
                      totalresults: arrowList?.length,
                    })}
                  </span>
                </Filters>
                <div className="mobile-only">
                  <ResetButton
                    className={styles.reset}
                    buttonText={t("filter.remove")}
                  />
                </div>
                <Contact
                  phoneNumber={t("contact.phoneNumber")}
                  phoneNumberLabel={t("contact.phoneNumberLabel")}
                  contactText={t("contact.contactText")}
                  showButton={true}
                  className={styles.contact}
                  inlineVariant
                />
              </div>
            </ArrowFilterProvider>
          )}
          <Intro
            title={t("arrowing_section.pageTitle")}
            extra={t("arrowing_section.extra_info")}
          >
            {t("arrowing_section.description")}
          </Intro>
          <div className={styles.itemContainer}>
            {isLoading ? (
              <div className={styles.loader}>
                <Loader />
              </div>
            ) : filteredArrows ? (
              filteredArrows.map((product) => (
                <ArrowItem product={product} key={product.id}></ArrowItem>
              ))
            ) : null}
          </div>
        </Grid>
      </Container>

      <Bottombar showContact hideSteps={true} />
    </div>
  );
};
