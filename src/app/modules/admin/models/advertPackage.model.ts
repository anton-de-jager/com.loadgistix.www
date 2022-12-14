import { Guid } from "guid-typescript";

export class advertPackage {
    constructor(
        id: Guid,
        description: string
    ) {
        this.id = id;
        this.description = description
    }
    public id: Guid;
    public description: string;
}