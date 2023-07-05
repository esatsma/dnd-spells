
const fetchClassSpells = async ({queryKey}) => {
    const className = queryKey[1];
    
    
    const apiRes = await fetch(
        `https://www.dnd5eapi.co/api/classes/${className}/spells`
    );
    
    if (!apiRes.ok) {
        throw new Error(`/${className} fetch not ok`);
    }
    
    return apiRes.json();
};
    
    export default fetchClassSpells;

