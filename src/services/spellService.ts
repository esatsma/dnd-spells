import axios from "axios";

export async function getAllSpells() {
    try{
        const response = await axios.get("https://www.dnd5eapi.co/api/spells");
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export async function getAllClasses() {
    try{
        const response = await axios.get("https://www.dnd5eapi.co/api/classes");
        return response.data;
    } catch(error) {
        console.log(error)
    }
}


export async function getClassSpells(className: string) {
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/classes/${className}/spells`);
        return response.data;
    } catch(error) {
        return [];
    }
}

export async function getSpellDetails(spellIndex: string) {
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${spellIndex}`);
        return response.data;
    } catch(error) {
        return [];
    }
}