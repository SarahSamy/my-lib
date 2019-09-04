export class MessageUtil
{
    constructor(){
    }

    public static getPayloadAsMap(object: any): Map<string,any>
    {
        let map:Map<string,any>=new Map;
        map=this.mapToObject(object,map);
        return map;
    }
    public static mapToObject(object, map) {
        for(let[k,v] of map) 
        { 
            object[k] = v 
        }
        return object;
    }
}