import { JobField } from "./jobField";

export interface Job {
    jobField: JobField,
    jobName: string,
    area: string,
    requirements: string[],
    fromHome: boolean
}