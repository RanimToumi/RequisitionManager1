import { EmployeeDTO } from "./employeesDTO";

export interface Departement {
    id: number;
    name: string;
    employees: EmployeeDTO[];
  }