import { JobField } from "./jobField";

export interface User {
    Id: string,
    UserName: string,
    Password: string,
    JobField: JobField,
}