import React, { useEffect, useState } from 'react'
import CheckboxTree from 'react-checkbox-tree'
import style from './index.module.css'
interface Nodes {
  label: string
  value: string
  children?: Nodes[]
  showCheckbox?: boolean
  title?: any
  className?: string
}

const nodes: Nodes[] = [
  {
    label: 'Scope 1',
    value: 'Scope 1',
    showCheckbox: false,
    className: [style.root, style.scope1].join(' '),

    children: [
      {
        label: 'Mobile combustion',
        value: 'Mobile combustion',
        children: [
          { value: 'On-Road cehicle', label: 'On-Road cehicle' },
          { value: 'Non On-Road cehicle', label: 'Non On-Road cehicle' },
        ],
      },
      {
        label: 'Fugitive Emissions',
        value: 'Fugitive Emissions',
        children: [
          { value: 'Refrigerated Transport', label: 'Refrigerated Transport' },
          {
            value: 'Industrial Process Refriferation',
            label: 'Industrial Process Refriferation',
          },
          {
            value: 'Cloud Strorage Warehouse',
            label: 'Cloud Strorage Warehouse',
          },
          {
            value: 'Mobile AID Conditioning',
            label: 'Mobile AID Conditioning',
          },
        ],
      },
      {
        label: 'Stationary Combustion Emission',
        value: 'Stationary Combustion Emission',
        children: [
          {
            value: 'Boilers',
            label: 'Boilers',
          },
          {
            value: 'Combustion Turbines',
            label: 'Combustion Turbines',
          },
          {
            value: 'Process Heaters',
            label: 'Process Heaters',
          },
          {
            value: 'Incinerators',
            label: 'Incinerators',
          },
        ],
      },
    ],
  },
  {
    label: 'Scope 2',
    value: 'SCope 2',
    showCheckbox: false,
    className: style.root,

    children: [
      {
        value: 'Electricity',
        label: 'Electricity',
      },
    ],
  },
  {
    label: 'Scope 3',
    value: 'Scope 3',
    showCheckbox: false,
    className: style.root,
    children: [
      {
        value: 'Purchased Goods and Services',
        label: 'Purchased Goods and Services',
      },
      {
        value: 'Capital Goods',
        label: 'Capital Goods',
      },
      {
        label: 'Fuel- and Energy-Related Activities',
        value: 'Fuel- and Energy-Related Activities',
      },
      {
        value: 'Upstream Transportation and Distribution',
        label: 'Upstream Transportation and Distribution',
      },
      {
        value: 'Waste Generated in Operations',
        label: 'Waste Generated in Operations',
      },
      {
        value: 'Business Travel',
        label: 'Business Travel',
      },
      {
        value: 'Employee Commuting',
        label: 'Employee Commuting',
      },
      {
        value: 'Upstream Leased Assets',
        label: 'Upstream Leased Assets',
      },
      {
        value: 'Downstream Transportation and Distribution',
        label: 'Downstream Transportation and Distribution',
      },
      {
        value: 'Processing of Sold Products',
        label: 'Processing of Sold Products',
      },
      {
        value: 'Use of Sold Products',
        label: 'Use of Sold Products',
      },
      {
        value: 'End-of-Life Treatment of Sold Products',
        label: 'End-of-Life Treatment of Sold Products',
      },
      {
        value: 'Downstream Leased Assets',
        label: 'Downstream Leased Assets',
      },
      {
        value: 'Franchises',
        label: 'Franchises',
      },
      {
        label: 'Investments',
        value: 'Investments',
      },
    ],
  },
]

function getNodeIds(nodes?: Nodes[]) {
  let ids: any = []
  nodes?.forEach(({ value, children }) => {
    ids = [...ids, value, ...getNodeIds(children)]
  })
  return ids
}
interface PropsType {
  setCheckedItems: Function
  checkItems?: Node[]
}
const Sidepanal: React.FC<PropsType> = ({ setCheckedItems, checkItems }) => {
  const [checked, setChecked] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>(getNodeIds(nodes))
  useEffect(() => {
    setCheckedItems(checked)
  }, [checked, setCheckedItems])

  return (
    <>
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checkeds) => setChecked(checkeds)}
        onExpand={(expandeds) => setExpanded(expandeds)}
        showNodeIcon={false}
        showNodeTitles={true}
        icons={{
          check: <i className="bx bx-checkbox-square"></i>,
          uncheck: <i className="bx bx-checkbox"></i>,
          halfCheck: <i className="bx bx-checkbox-minus"></i>,
          expandClose: null,
          expandOpen: null,
          expandAll: <span className="rct-icon rct-icon-expand-all" />,
          collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
          parentClose: <span className="rct-icon rct-icon-parent-close" />,
          parentOpen: <span className="rct-icon rct-icon-parent-open" />,
          leaf: <span className="rct-icon rct-icon-leaf" />,
        }}
      />
    </>
  )
}

export default Sidepanal
