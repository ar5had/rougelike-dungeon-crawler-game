"use strict";

// React component model
// App
// --Panel
// --Game
var App = React.createClass({
	displayName: "App",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "app container" },
			React.createElement(Panel, null),
			React.createElement(Game, null)
		);
	}
});

var Panel = React.createClass({
	displayName: "Panel",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "gamePanel" },
			React.createElement(
				"div",
				{ className: "col-xs-12 text-center" },
				React.createElement(
					"h3",
					{ id: "logo" },
					"Roguelike Game"
				)
			),
			React.createElement(
				"div",
				{ className: "col-xs-12" },
				React.createElement(
					"div",
					{ className: "col-xs-3 text-center" },
					"Health: ",
					React.createElement(
						"span",
						{ className: "health" },
						"10"
					)
				),
				React.createElement(
					"div",
					{ className: "col-xs-3 text-center" },
					"Weapon: ",
					React.createElement(
						"span",
						{ className: "weapon" },
						"Pistol"
					)
				),
				React.createElement(
					"div",
					{ className: "col-xs-3 text-center" },
					"Attack: ",
					React.createElement(
						"span",
						{ className: "attack" },
						"20"
					)
				),
				React.createElement(
					"div",
					{ className: "col-xs-3 text-center" },
					"level: ",
					React.createElement(
						"span",
						{ className: "level" },
						"3"
					)
				)
			)
		);
	}
});

var Game = React.createClass({
	displayName: "Game",

	getInitialState: function getInitialState() {
		var parent_this = this;
		var levels = [1, 2, 3].map(function (levelNo) {

			return parent_this.createLevel(levelNo);
		});
		return { levels: levels, currentLevel: 0 };
	},
	createLevel: function createLevel(levelNo) {
		var level = [];
		for (var i = 0; i < 20; i++) {
			level.push([]);
			for (var j = 0; j < 60; j++) {
				if (i === 0 || i === 19 || j === 0 || j === 59) level[i][j] = "=";else {
					level[i][j] = "=";
				}
			}
		}
		return level;
	},
	componentDidMount: function componentDidMount() {},
	render: function render() {
		var level = [],
		    arr = [];
		for (var i = 0; i < this.state.levels[this.state.currentLevel]["length"]; i++) {
			arr = [];
			for (var j = 0; j < this.state.levels[this.state.currentLevel][0]["length"]; j++) {
				arr.push(React.createElement(
					"span",
					{ className: "block" },
					this.state.levels[this.state.currentLevel][i][j]
				));
			}
			level.push(React.createElement(
				"div",
				{ className: "levelRow" },
				arr
			));
		}
		return React.createElement(
			"div",
			{ className: "game col-xs-12 text-center" },
			level
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));