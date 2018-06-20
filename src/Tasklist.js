import React, { Component } from 'react';
import ipcRenderer from 'electron';

var status = {
  idle: 0,  // 未実行
  doing: 1, // 実行中
  done: 2,  // 完了
};

class Tasklist extends Component {
  constructor(props) {
    super(props);

    this.createDummyData();

    var tasks = [];
    //this.db.find({}, function(err, docs) {
    //  tasks = docs.map((item) => {
    //    return new Task(
    //      docs.name,
    //      docs.description,
    //      docs.status,
    //    );
    //  });
    //});

    console.log("aaaaa : " + tasks);
    this.state = {tasks: tasks};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const rowComponents = this.generateRows();

    return (
      <table>
        <thead>
          <th></th>
        </thead>
        <tbody>
          {rowComponents}
        </tbody>
      </table>
    );
  }

  generateRows() {
    const tasks = this.props.tasks;

    if(tasks == null) {
      return [];
    } else {
      return tasks.map((item) => {
        return item.render();
      });
    }
  }

  save(task) {
    var doc = {
      name:        task.name,
      description: task.description,
      status:      task.status,
    };
  }
}

// Task
class Task {
  constructor(name, desc, status) {
    this.name        = '';
    this.description = '';
    this.status      = status;
  }

  // 描画
  render() {
    return (
      <tr key={this.name}>
        <td>{this.name}</td>
      </tr>
    );
  }
}
export default Tasklist;
