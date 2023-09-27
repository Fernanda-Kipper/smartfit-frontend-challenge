import { Location } from "./location.interface";

export interface UnitsResponse {
  current_country_id: number,
  locations: Location[]
}
