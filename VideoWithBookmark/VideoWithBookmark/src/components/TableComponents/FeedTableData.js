const columns = [
    { id: 'name', label: 'Detail', minWidth: 170 },
    { id: 'code', label: 'Record Added', minWidth: 100 },
    
  ];
  
  function createData(name, code) {
    
    return { name, code};
  }
  
  const rows = [
    createData('Title', 'Market Feasibility Study'),
    createData('Date', '12 June 2021'),
    createData('Time', '10 pm'),
    createData('Duration', '1 hour'),
    createData('Type', 'Live Session'),  
  ];