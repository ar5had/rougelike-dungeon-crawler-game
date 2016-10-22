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
					"Roguelike Dungeon Crawler Game"
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
		var levels = this.createLevel();
		return { levels: levels, currentLevel: 0 };
	},
	createLevel: function createLevel() {
		//51*26
		var levels = [[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]];

		levels.push([]);
		levels[0].forEach(function (arr) {
			levels[1].push(arr.slice(0).reverse());
		});

		levels.push([]);
		for (var k = levels[1]["length"] - 1; k >= 0; k--) {
			levels[2].push(levels[1][k].slice(0));
		}
		return this.createActors(levels);
	},
	createActors: function createActors(levelsArr) {
		var levels = levelsArr.slice(0);
		levels = levels.map(function (arr, k) {
			var level = arr.slice(0);
			var hc = 7,
			    ec = 7,
			    wc = 7,
			    gc = 1,
			    h = true,
			    e = true,
			    w = true,
			    b = true,
			    g = true;

			for (var i = 0; i < level.length; i++) {
				h = true, e = true, w = true, g = true;
				for (var j = 0; j < level[0].length; j++) {

					if (Math.random() > .95 && h && level[i][j] === 1 && hc > 0 && (hc < 3 ? i > 15 : true)) {
						level[i][j] = 2;
						hc--;
						h = false;
					} else if (Math.random() < .05 && e && level[i][j] === 1 && ec > 0 && (hc < 3 ? i > 15 : true)) {
						level[i][j] = 3;
						ec--;
						e = false;
					} else if (Math.random() > .95 && w && level[i][j] === 1 && wc > 0 && (i > 14 || i < 5)) {
						level[i][j] = 4;
						wc--;
						w = false;
					} else if (Math.random() > .95 && g && level[i][j] === 1 && gc > 0 && i > 15 && j > 30) {
						level[i][j] = 5;
						g = false;
						gc--;
					}

					if (k === 2 && b && level[i][j] === 1 && Math.random() < .02 && i > 10 && i < 13) level[i][j] = 6, b = false;
				}
			}

			return level;
		});
		return levels;
	},
	componentDidMount: function componentDidMount() {
		ReactDOM.findDOMNode(this).addEventListener('nv-event', this.eventHandler);
	},
	getClassNames: function getClassNames(str, elem) {
		var newClass = "";
		if (elem === 0) newClass = " wall";else if (elem === 1) newClass = " movable";else if (elem === 2) newClass = " healthb";else if (elem === 3) newClass = " enemyb";else if (elem === 4) newClass = " weaponb";else if (elem === 5) newClass = " gate";else if (elem === 6) newClass = " boss";else if (elem === 9) newClass = " player";

		return str + newClass;
	},
	eventHandler: function eventHandler() {
		var arrowCodes = { 37: "left", 38: "up", 39: "right", 40: "down" };
	},
	render: function render() {
		var level = [],
		    arr = [];
		for (var i = 0; i < this.state.levels[this.state.currentLevel]["length"]; i++) {
			arr = [];
			for (var j = 0; j < this.state.levels[this.state.currentLevel][0]["length"]; j++) {
				var elem = this.state.levels[this.state.currentLevel][i][j];
				arr.push(React.createElement("td", { className: this.getClassNames("block", elem) }));
			}
			level.push(React.createElement(
				"tr",
				{ className: "levelRow" },
				arr
			));
		}
		return React.createElement(
			"div",
			{ className: "gameContainer" },
			React.createElement(
				"table",
				{ className: "game text-center" },
				level
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));