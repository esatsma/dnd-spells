import { QueryFunction } from "@tanstack/react-query";
import { fetchClassResponse } from "../types/spells.type";

const fetchClassList: QueryFunction<fetchClassResponse, ["classes"]> = async () => {
    const apiRes = await fetch(
        "https://www.dnd5eapi.co/api/classes"
    );
  
    if (!apiRes.ok) {
      throw new Error(`classlist fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchClassList;
  