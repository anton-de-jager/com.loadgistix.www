import { Guid } from "guid-typescript";

export class Role {
    id: Guid;
    description: string;

    constructor(
        id: Guid,
        description: string
    ) {
        this.id = id;
        this.description = description;
    }
}