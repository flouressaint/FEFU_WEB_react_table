import "./App.css";
import { useState } from "react";

function App(props) {
  return <MyTable data={props.data} />;
}

function MyTable(props) {
  const [data, setData] = useState(props.data);
  let heads = [];
  for (let keys in data[0]) {
    heads.push(keys);
  }
  const radioCheck = heads.map((head, i) => (
    <div className="radioElem">
      <input
        type="radio"
        id={i}
        name="radioCheck"
        value={head}
        onChange={handleClick}
      ></input>
      <label for={head}>{head}</label>
    </div>
  ));
  const head = heads.map((head) => <th>{head}</th>);
  const dataTable = data.map((data) => (
    <tr>
      <td>{data[heads[0]]}</td>
      <td>{data[heads[1]]}</td>
      <td>{data[heads[2]]}</td>
      <td>{data[heads[3]]}</td>
      <td>{data[heads[4]]}</td>
    </tr>
  ));

  function handleClick(event) {
    let temp = [...data];
    temp.sort(function (a, b) {
      let result = 0;
      let key = event.target.value;
      if (a[key] < b[key]) {
        result = -1;
      } else if (a[key] > b[key]) {
        result = 1;
      }
      return result;
    });

    setData(temp);
  }

  return (
    <>
      <div className="radioCheck">{radioCheck}</div>
      <table>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>{dataTable}</tbody>
      </table>
    </>
  );
}

export default App;
