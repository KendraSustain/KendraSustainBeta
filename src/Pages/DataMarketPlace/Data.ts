export interface Nodes {
  name: string
  children?: Nodes[]
}

export const nodes: Nodes[] = [
  {
    name: 'Scope',
    children: [
      {
        name: 'Scope 1',
        children: [
          {
            name: 'Mobile combustion',
            children: [
              { name: 'On-Road cehicle' },
              { name: 'Non On-Road cehicle' },
            ],
          },
          {
            name: 'Fugitive Emissions',
            children: [
              { name: 'Refrigerated Transport' },
              {
                name: 'Industrial Process Refriferation',
              },
              {
                name: 'Cloud Strorage Warehouse',
              },
              {
                name: 'Mobile AID Conditioning',
              },
            ],
          },
          {
            name: 'Stationary Combustion Emission',
            children: [
              {
                name: 'Boilers',
              },
              {
                name: 'Combustion Turbines',
              },
              {
                name: 'Process Heaters',
              },
              {
                name: 'Incinerators',
              },
            ],
          },
        ],
      },
      {
        name: 'Scope 2',

        children: [
          {
            name: 'Electricity',
          },
        ],
      },
      {
        name: 'Scope 3',
        children: [
          {
            name: 'Purchased Goods and Services',
          },
          {
            name: 'Capital Goods',
          },
          {
            name: 'Fuel- and Energy-Related Activities',
          },
          {
            name: 'Upstream Transportation and Distribution',
          },
          {
            name: 'Waste Generated in Operations',
          },
          {
            name: 'Business Travel',
          },
          {
            name: 'Employee Commuting',
          },
          {
            name: 'Upstream Leased Assets',
          },
          {
            name: 'Downstream Transportation and Distribution',
          },
          {
            name: 'Processing of Sold Products',
          },
          {
            name: 'Use of Sold Products',
          },
          {
            name: 'End-of-Life Treatment of Sold Products',
          },
          {
            name: 'Downstream Leased Assets',
          },
          {
            name: 'Franchises',
          },
          {
            name: 'Investments',
          },
        ],
      },
    ],
  },
]
