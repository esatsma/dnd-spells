import { AreaOfEffect, SpellComponent } from "../enums/Spell.enum"

export type SpellsApiResponse = {
    count: number,
    results: BasicApiResponseObject[]
}

export type BasicApiResponseObject = {
    index: string        
    name: string       
    url: string     
}


export type fetchClassResponse = {
    count: number,
    results: BasicApiResponseObject[]
}

export type fetchSpellDetailsResponse = {
    index: string,
    name: string,
    url: string,
    desc: [string],
    higher_level: [string],
    range: string,
    components: SpellComponent[],
    material: string,
    area_of_effect?: {
    
    type: AreaOfEffect,
    }
    ritual: boolean,
    duration: string,
    concentration: boolean,
    casting_time: string,
    level: number,
    attack_type: string,
    damage: {
        [Key: string]: {
            [number: string]: any
        },
        damage_type: BasicApiResponseObject,
    }
    school:BasicApiResponseObject,
    classes: BasicApiResponseObject[],
    subclasses: BasicApiResponseObject[]
}