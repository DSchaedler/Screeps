var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleMover = require('role.mover');

const roomID = 'E13N66';
var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES);
    
    if (harvesters < (sources.length)) {
        if (movers < 2){
            Game.spawns.Spawn1.createCreep( [MOVE, MOVE, CARRY, WORK], null, {role: 'harvester' } );}
        else {
            Game.spawns.Spawn1.createCreep( [MOVE, CARRY, WORK], null, {role: 'harvester' } );}
    }
    else if(movers < harvesters) {
        Game.spawns.Spawn1.createCreep( [MOVE, MOVE, CARRY], null, { role: 'mover' } );}
	else if(upgraders < sources.length * 1) {
		Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], null, { role: 'upgrader' } );}
    else if(builders < (sources.length * 2)) {
        Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE, MOVE], null, { role: 'builder' } );}
    else if(repairers < (sources.length * 1) && controllerLevel > 1) {
        Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE, MOVE], null, { role: 'repairer' } );}
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep, 1);}
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);}
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);}
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);}
        if(creep.memory.role == 'mover') {
            roleMover.run(creep);}

    }
}
