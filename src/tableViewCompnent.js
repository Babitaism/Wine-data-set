function TableViewComponent(props) {
  const th = () => {

    return Object.keys(props.data).map((r) => {
      return <th key={r}>CLASS {r}</th>;
    });
  };

  const tr = () => {
    let data = props.data;
    const firstElement = props.data["1"];
    if(firstElement === undefined){
      return []
    }
    const prefix = Object.keys(firstElement)[0];
    const allkeys = Object.keys(firstElement[prefix]);

    let tr = [];
    let count = 0;

    for (let z of allkeys) {
      let tdArr = [];
      count +=1;
      tdArr.push(<td key={prefix+count}>{prefix.toUpperCase()} {z.toUpperCase()}</td>)
      for (let i in data) {
        count+=1;
        let stats = data[i][prefix];
        tdArr.push(<td key={prefix+count}>{stats[z]}</td>);
      }
      count+=1
      tr.push(<tr key={prefix+count}>{tdArr}</tr>);
    }
    return tr;
  };

  return (
    <div className="App">
      <table>
      <tbody>
        <tr>
          <th>MEASURE</th>
          {th()}
        </tr>
        {tr()}
        </tbody>
      </table>
    </div>
  );
}

export default TableViewComponent;
