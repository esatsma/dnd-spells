import React from "react";
import fetchClassList from "../../../services/fetchClassList";
import { useQuery } from "@tanstack/react-query";
import { ClassCard } from "../../molecules/ClassCard/ClassCard";
import { Link } from "react-router-dom";

export const ClassList = () => {
  const result = useQuery(["classes"], fetchClassList);
  const dndClasses = result.data?.results;

  return (
    <>
      {dndClasses &&
        dndClasses.map((dndClass) => (
          <Link to={`/spells/${dndClass.index}`} key={dndClass.index}>
            <ClassCard
              name={dndClass.name}
              index={dndClass.index}
              key={dndClass.index}
            />
          </Link>
        ))}
    </>
  );
};

export default ClassList;
