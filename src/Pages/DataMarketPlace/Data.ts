export interface Nodes {
  title: string
  children?: Nodes[]
}

export const nodes: Nodes[] = [
  {
    title: 'Scope',
    children: [
      {
        title: 'Scope 1',
        children: [
          {
            title: 'Mobile combustion',
            children: [
              { title: 'On-Road cehicle' },
              { title: 'Non On-Road cehicle' },
            ],
          },
          {
            title: 'Fugitive Emissions',
            children: [
              { title: 'Refrigerated Transport' },
              {
                title: 'Industrial Process Refriferation',
              },
              {
                title: 'Cloud Strorage Warehouse',
              },
              {
                title: 'Mobile AID Conditioning',
              },
            ],
          },
          {
            title: 'Stationary Combustion Emission',
            children: [
              {
                title: 'Boilers',
              },
              {
                title: 'Combustion Turbines',
              },
              {
                title: 'Process Heaters',
              },
              {
                title: 'Incinerators',
              },
            ],
          },
        ],
      },
      {
        title: 'Scope 2',

        children: [
          {
            title: 'Electricity',
          },
        ],
      },
      {
        title: 'Scope 3',
        children: [
          {
            title: 'Purchased Goods and Services',
          },
          {
            title: 'Capital Goods',
          },
          {
            title: 'Fuel- and Energy-Related Activities',
          },
          {
            title: 'Upstream Transportation and Distribution',
          },
          {
            title: 'Waste Generated in Operations',
          },
          {
            title: 'Business Travel',
          },
          {
            title: 'Employee Commuting',
          },
          {
            title: 'Upstream Leased Assets',
          },
          {
            title: 'Downstream Transportation and Distribution',
          },
          {
            title: 'Processing of Sold Products',
          },
          {
            title: 'Use of Sold Products',
          },
          {
            title: 'End-of-Life Treatment of Sold Products',
          },
          {
            title: 'Downstream Leased Assets',
          },
          {
            title: 'Franchises',
          },
          {
            title: 'Investments',
          },
        ],
      },
    ],
  },
]
