
var BugFilter = React.createClass({
  render: function() {
    return (
      <div className="bugFilter">
        This is a filter
      </div>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    return (
      <div className="bugTable">
        This is a table
      </div>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    <div className="bugAdd">
      This is where you add bugs
    </div>
  }
});

var BugList = React.createClass({
  render: function() {
    return (
      <div className="bugList">
        <BugFilter />
        <BugTable />
        <BugAdd />
      </div>
    );
  }
});


ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
