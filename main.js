require("lodash");

var setup =         require('job.setup');
var defendRoom =    require('job.defendRoom');

var roleHarvester = require('role.harvester');
var roleUpgrader =  require('role.upgrader');
var roleBuilder =   require('role.builder');
var roleRepairer =  require('role.repairer');
var roleMover =     require('role.mover');

Memory.roomController = Game.spawns.Spawn1.room.controller;
Memory.sources = Game.spawns.Spawn1.room.find(FIND_SOURCES).id;

const roomController =          Memory.roomController;
const roomID =                  Memory.roomController.room.name;
const sources =                 Memory.sources;

const source0Points = Math.ceil(4 / 1.5);
const source1Points = Math.ceil(3 / 1.5);

const profiler = require ('screeps-profiler');
profiler.enable();

module.exports.loop = function () {
	profiler.wrap(function() {
		for(var i in Memory.creeps) {
			if(!Game.creeps[i]) {
				delete Memory.creeps[i];
			}
		}
		
		new RoomVisual(roomID).text(("Time: " + Game.time), 24, 21, {align: 'left'});
		
		setup.run();
		defendRoom.run();
		
		if ((Game.time % 5) == 0) {
			var harvesters = _(Game.creeps).filter({memory: {role: 'harvester'}}).size();
			var upgraders = _(Game.creeps).filter({memory: {role: 'upgrader'}}).size();
			var builders = _(Game.creeps).filter({memory: {role: 'builder'}}).size();
			var repairers = _(Game.creeps).filter({memory: {role: 'repairer'}}).size();
			var movers = _(Game.creeps).filter({memory: {role: 'mover'}}).size();
			
			var controllerLevel = roomController.level;;
		}
		
		var source0Mov = _(Game.creeps).filter({memory: {role: 'mover', source: '0'}}).size();
		var source0Harv = _(Game.creeps).filter({memory: {role: 'harvester', source: '0'}}).size();
		
		if (harvesters < (source0Points + source1Points)) {
			if ( source0Harv < source0Points) {
				Game.spawns.Spawn1.createCreep( [MOVE, CARRY, WORK, WORK], null, {role: 'harvester', source: '0' } );}
			else {
				Game.spawns.Spawn1.createCreep( [MOVE, CARRY, WORK, WORK], null, {role: 'harvester', source: '1' } );}
		}
		else if(movers < harvesters + 2) {
			if (source0Mov < source0Harv + 1){
				Game.spawns.Spawn1.createCreep( [MOVE, MOVE, CARRY, CARRY], null, {role: 'mover', source: '0'} );}
			else {
				Game.spawns.Spawn1.createCreep( [MOVE, MOVE, CARRY, CARRY], null, {role: 'mover', source: '1'} );}}
		else if(upgraders < 2) {
			Game.spawns.Spawn1.createCreep( [WORK, CARRY, CARRY, CARRY, MOVE], null, { role: 'upgrader' } );}
		else if(builders < 1) {
			Game.spawns.Spawn1.createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], null, { role: 'builder' } );}
		else if(((repairers < 3 && controllerLevel <4 ) || (repairers < 4 && controllerLevel >= 4) && controllerLevel >= 2)) {
			Game.spawns.Spawn1.createCreep( [WORK, CARRY, CARRY, MOVE, MOVE], null, { role: 'repairer' } );}
		
		for(var name in Game.creeps) {
			var creep = Game.creeps[name];
			if(creep.memory.role == 'harvester') {
				roleHarvester.run(creep, parseInt(creep.memory.source));}
			if(creep.memory.role == 'upgrader') {
				roleUpgrader.run(creep);}
			if(creep.memory.role == 'builder') {
				roleBuilder.run(creep);}
			if(creep.memory.role == 'repairer') {
				roleRepairer.run(creep);}
			if(creep.memory.role == 'mover') {
				roleMover.run(creep, parseInt(creep.memory.source));}
		}
		
	});
};
