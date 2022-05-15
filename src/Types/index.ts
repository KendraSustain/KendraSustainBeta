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
