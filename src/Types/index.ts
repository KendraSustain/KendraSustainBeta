export interface AssetType {
  asset_name: string
  asset_type: string
  id: number
  location: string
  owner_id: number
}

export interface AssetDataType {
  Date: string
  'Energy Consumption': number
  'Carbon Emission': number
}
export type ScopeTwoDataType = AssetDataType[]
export interface ScopeOneDataType {
  Location: string
  'Vehicle Reg': string
  'Vehicle Reg Driver': string
  Data: {
    'CO2 Emission': number
    'Transaction Date/Time': string
    DistanceTraveled: number
  }[]
}

export interface userType {
  firstname: string
  lastname: string
  id: number
  email: string
  company: string
}
