const fetchSpellDetails = async ({queryKey}) => {
const spellIndex = queryKey[1];


    const apiRes = await fetch(
        `https://www.dnd5eapi.co/api/spells/${spellIndex}`
    );
  
    if (!apiRes.ok) {
      throw new Error(`/${spellIndex} fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchSpellDetails;

