import React, { Component } from 'react';
import ipcRenderer from 'electron';

var Datastore = require('nedb');

var status = {
  idle: 0,  // 未実行
  doing: 1, // 実行中
  done: 2,  // 完了
};

class Tasklist extends Component {
  constructor(props) {
    super(props);

    // Database
    this.db = new Datastore({
      filename: './db/tasks.db',
      autoload: true,
    });

    this.createDummyData();

    var tasks = [];
    this.db.find({}, function(err, docs) {
      tasks = docs.map((item) => {
        return new Task(
          docs.name,
          docs.description,
          docs.status,
        );
      });
    });

    console.log("aaaaa : " + tasks);
    this.state = {tasks: tasks};
  }

  createDummyData() {
    this.db.insert({ name: 'piyo', description: 'piyo no memo', status: status.idle }, function(err, newDoc) {});
    this.db.insert({ name: 'second', description: 'second no memo', status: status.done }, function(err, newDoc) {});
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
    this.db.insert(doc, function(err, newDoc) {
    });
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
