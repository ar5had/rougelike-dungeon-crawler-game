// React component model
// App
// --Panel
// --Game
var App = React.createClass({
	render: function() {
		return (
			<div className="app container" >
				<Panel />
				<Game />
			</div>
		);
	}
});

var Panel = React.createClass({
	render: function() {
		return (<div className="gamePanel" >
			<div className="col-xs-12 text-center"><h3 id="logo">Roguelike Game</h3></div>
				<div className="col-xs-12">
					<div className="col-xs-3 text-center">
						Health: <span className="health">10</span>
					</div>
					<div className="col-xs-3 text-center">
						Weapon: <span className="weapon">Pistol</span>
					</div>
					<div className="col-xs-3 text-center">
						Attack: <span className="attack">20</span>
					</div>
					<div className="col-xs-3 text-center">
						level: <span className="level">3</span>
					</div>
				</div>
		</div>);
	}
});

var Game = React.createClass({
	getInitialState: function() {
		var levels = this.createLevel();
		return {levels: levels, currentLevel: 0};
	},
	createLevel: function() {
		//51*26
var levels = [
[
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0],
  [0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
];
		
		levels.push([]);
		
		for (var i = 0; i < levels[0].length; i++) {
			levels[1].push([]);
			levels[1][i] = levels[0][levels[0].length-i-1].slice(0);
		}
		
		levels.push([]);
		
		for (var i = 0; i < levels[0].length; i++) {
			levels[2].push([]);
			var arr = levels[0][i].slice(0);
			levels[2][i] = arr.reverse();
		}
		
		return this.createActors(levels);
 },
	createActors: function(levels) {
		
		var healthCount = 7;
		var enemyCount = 7;
		var weaponCount = 7;
		var gate = 1;
		var boss = 1;
		var newLevels = levels.map(function(level){
			for(var i = 0; i < level.length; i++) {
				
				if(i % 3 === 0)
				var he = false, hw = false, hh = false, hg = false;
				
				for(var j = 0; j < level[0].length; j++) {
					
					if(k == 2 && (i > 6) && (j > 10) && (level[i][j]===1) && boss > 0) 
								level[i][j] = 6, boss = boss - 1;
					
					if(level[i][j] == 1 && healthCount > 0 && (j % 2 === 0) ){
					
						if(Math.random() > .5 && (i > 10) && (j > 20) && gate > 0 && !hg) {
							if(level[i][j] === 1) {
								level[i][j] = 5;
								gate--;
								hg = true;
							}																		
						}
						if(!hh && Math.random() < .1) {
							level[i][j] = 2;
							healthCount --;
							hh = true;
						}
						else if(!hw && Math.random() > .95 && weaponCount > 0) {
							level[i][j] = 4;
							weaponCount--;
							hw = true;
						}
					}
					else if(!he && level[i][j] == 1 && enemyCount > 0 && (j % 2 !== 0) ){
						if(Math.random() < .1) {
							{
								level[i][j] = 3;
								enemyCount--;
								he = true;
							}
						}
						else if(!hw && Math.random() > .92 && weaponCount > 0) {
							level[i][j] = 4;
							weaponCount--;
							hw = true;
						}
					}
				}		
			
			});
		}
		console.log(levels);
		return levels;
	},
	componentDidMount: function() {
	},
	getClassNames : function(str, elem) {
		var newClass = "";
		if (elem === 0)
			newClass = " wall";
		else if (elem === 1)
			newClass = " movable";
		else if (elem === 2)
			newClass = " healthb";
		else if (elem === 3)
			newClass = " enemyb";
		else if (elem === 4)
			newClass = " weaponb";
		else if (elem === 5)
			newClass = " gate";
		else if (elem === 6)
			newClass = " boss";
		
		
	
		return str + newClass;
	},
	render: function(){
		var level = [], arr = [];
		for (var i = 0; i < this.state.levels[this.state.currentLevel]["length"]; i++) {
			arr = [];
			for (var j = 0; j < this.state.levels[this.state.currentLevel][0]["length"]; j++) {				
				var elem = this.state.levels[this.state.currentLevel][i][j];
				arr.push(<td className={this.getClassNames("block",  elem)} />);
			}
			level.push(<tr className="levelRow">{arr}</tr>);
		}
		return (
			<div className="gameContainer">
				<table className="game text-center">
					{level}
				</table>
			</div>
		);
	}
});


ReactDOM.render(<App />, document.getElementById("app"));