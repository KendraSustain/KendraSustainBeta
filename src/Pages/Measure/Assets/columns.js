export const columns = [
  {
    title: 'Name of Asset',
    field: 'asset_name',
    cellStyle: {
      borderBottom: '1px solid rgba(0,0,0,0.03)',
      fontSize: '0.8rem',
      whiteSpace: 'nowrap',
      textAlign: 'left',
    },
    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'left'
    },
    render: rowData => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333'
        }}
      >
        {rowData.asset_name}
      </span>
    )
  },
  {
    title: 'Asset Type',
    field: 'asset_type',
    cellStyle: {
      borderBottom: '1px solid rgba(0,0,0,0.03)',
      fontSize: '0.8rem',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    },
    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'center'
    },
    render: rowData => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333'
        }}
      >
        {rowData.asset_type}
      </span>
    )
  },

  {
    title: 'Location',
    field: 'location',
    cellStyle: {
      borderBottom: '1px solid rgba(0,0,0,0.03)',
      fontSize: '0.8rem',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    },
    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'center'
    },
    render: rowData => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333'
        }}
      >
        {rowData.location}
      </span>
    )
  }
]
