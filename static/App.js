
var BugFilter = React.createClass({
  displayName: "BugFilter",

  render: function () {
    return React.createElement(
      "div",
      { className: "bugFilter" },
      "This is a filter"
    );
  }
});

var BugTable = React.createClass({
  displayName: "BugTable",

  render: function () {
    return React.createElement(
      "div",
      { className: "bugTable" },
      "This is a table"
    );
  }
});

var BugAdd = React.createClass({
  displayName: "BugAdd",

  render: function () {
    React.createElement(
      "div",
      { className: "bugAdd" },
      "This is where you add bugs"
    );
  }
});

var BugList = React.createClass({
  displayName: "BugList",

  render: function () {
    return React.createElement(
      "div",
      { className: "bugList" },
      React.createElement(BugFilter, null),
      React.createElement(BugTable, null),
      React.createElement(BugAdd, null)
    );
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));