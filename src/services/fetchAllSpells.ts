import { QueryFunction } from "@tanstack/react-query";
import { SpellsApiResponse } from "../types/spells.type";

const fetchAllSpells: QueryFunction<SpellsApiResponse, ["spells"]> = async () => {
    const apiRes = await fetch(
        "https://www.dnd5eapi.co/api/spells"
    );
  
    if (!apiRes.ok) {
      throw new Error(`spelllist fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchAllSpells;