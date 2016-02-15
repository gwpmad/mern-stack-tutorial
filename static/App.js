var bugData = [{
  id: 1,
  status: "ongoing",
  priority: "high",
  owner: "george",
  title: "bug1"
}, {
  id: 2,
  status: "finished",
  priority: "medium",
  owner: "rob",
  title: "bug2"
}, {
  id: 3,
  status: "new",
  priority: "low",
  owner: "anna",
  title: "bug3"
}, {
  id: 4,
  status: "done",
  priority: "medium",
  owner: "george",
  title: "bug4"
}];

var BugFilter = React.createClass({
  displayName: "BugFilter",

  render: function () {
    console.log("Rendering BugFilter");

    return React.createElement(
      "div",
      { className: "bugFilter" },
      "This is a filter "
    );
  }
});

var BugRow = React.createClass({
  displayName: "BugRow",

  render: function () {
    console.log("Rendering BugRow:", this.props.bug);

    return React.createElement(
      "tr",
      { className: "bugRow" },
      React.createElement(
        "td",
        null,
        " ",
        this.props.bug.id,
        " "
      ),
      " ",
      React.createElement(
        "td",
        null,
        " ",
        this.props.bug.status,
        " "
      ),
      " ",
      React.createElement(
        "td",
        null,
        " ",
        this.props.bug.priority,
        " "
      ),
      " ",
      React.createElement(
        "td",
        null,
        " ",
        this.props.bug.owner,
        " "
      ),
      " ",
      React.createElement(
        "td",
        null,
        " ",
        this.props.bug.title,
        " "
      ),
      " "
    );
  }
});

var BugTable = React.createClass({
  displayName: "BugTable",

  render: function () {
    console.log("Rendering bug table, num items:", this.props.bugs.length);

    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });

    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            " Id "
          ),
          React.createElement(
            "th",
            null,
            " Status "
          ),
          React.createElement(
            "th",
            null,
            " Priority "
          ),
          React.createElement(
            "th",
            null,
            " Owner "
          ),
          React.createElement(
            "th",
            null,
            " Title "
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        bugRows
      ),
      " "
    );
  }
});

var BugAdd = React.createClass({
  displayName: "BugAdd",

  render: function () {
    console.log("Rendering BugAdd");
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { name: "bugAdd" },
        React.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
        React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
        React.createElement(
          "button",
          { onClick: this.handleSubmit },
          "Add Bug"
        )
      )
    );
  },

  handleSubmit: function (e) {
    //e is the event object that is passed to the function in browsers other than IE.
    e.preventDefault();
    var form = document.forms.bugAdd; //reference to form name
    this.props.addBug({ owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1' });
    //clear the form for the next input
    form.owner.value = "";
    form.title.value = "";
  }

});

var BugList = React.createClass({
  displayName: "BugList",

  getInitialState: function () {
    return { bugs: bugData };
  },
  render: function () {
    console.log("Rendering bug list, num items:", this.state.bugs.length);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Bug Tracker"
      ),
      React.createElement(BugFilter, null),
      React.createElement("hr", null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement("hr", null),
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  },

  addBug: function (bug) {
    console.log("Adding bug:", bug);
    // We're advised not to modify the state, it's immutable. So, make a copy.
    var bugsModified = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugsModified.push(bug);
    this.setState({ bugs: bugsModified });
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));