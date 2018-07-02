/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('job.setMemory');
 * mod.thing == 'a thing'; // true
 */

var setup = {
    run:function() {

        if(!Memory.roomController || !Memory.sources) {
            
            // Setup Primary Memory
            var sources =        Game.spawns.Spawn1.room.find(FIND_SOURCES);
            var sourceList = [];
            
            for (i = 0; i < sources.length; i++) {
                sourceList.push(sources[i].id)
            }
            
            Memory.sources = sourceList;
            Memory.roomController = Game.spawns.Spawn1.room.controller;
            
            
        }
    }
}

module.exports = setup;