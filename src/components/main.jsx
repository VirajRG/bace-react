import React from 'react';
import { Checkbox } from 'antd'

const CheckboxGroup = Checkbox.Group;

const data = [
  { name: 'a', breakfast: 'yes', lunch: 'no', dinner: 'yes' },
  { name: 'b', breakfast: 'yes', lunch: 'no', dinner: 'yes' },
  { name: 'c', breakfast: 'yes', lunch: 'no', dinner: 'yes' },
  { name: 'd', breakfast: 'yes', lunch: 'no', dinner: 'yes' }
];
const pdata = [
  { name: 'a', meal: ['breakfast', 'dinner'] }
]
const plainOptions = ['breakfast', 'lunch', 'dinner']
// const options = [
//   { label: 'Breakfast', value: 'breakfast' },
//   { label: 'Lunch', value: 'lunch' },
//   { label: 'Dinner', value: 'dinner' },
// ];

function processData(data) {
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    var x = [];
    var y={};
    y.name = data[i].name;
    if (data[i].breakfast == 'yes') {
      x.push('breakfast');
    }
    if (data[i].lunch == 'yes') {
      x.push('lunch');
    }
    if (data[i].dinner == 'yes') {
      x.push('dinner');
    }
    y.meal = x;
    arr.push(y)
  }
  console.log(arr);
}
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="title">VJTI BACE</div>
        <div>
          {data && data.map((obj,index)=>{<span>obj.name</span>})}
          <CheckboxGroup options={plainOptions} defaultValue={pdata[0].meal} onChange={onChange} />
          <br /><br />
        </div>
      </div>
    );
  }
}

export default Main;