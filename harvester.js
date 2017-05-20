module.exports = function (creep) {
    if(creep.energy === creep.energyCapacity) {
	    creep.memory.source = null;
		creep.moveTo(Game.spawns.Spawn1);
		creep.transfer(Game.spawns.Spawn1);
		return;
    }
    
    if (!creep.memory.source) {
        var sources = creep.room.find(Game.SOURCES_ACTIVE);
	    sources.sort(function(a, b) {
	        var aDeltaX = Math.abs(creep.pos.x - a.pos.x);
	        var aDeltaY = Math.abs(creep.pos.y - a.pos.y);
	        var aDelta = Math.sqrt(aDeltaX + aDeltaY);
	        
	        var bDeltaX = Math.abs(creep.pos.x - b.pos.x);
	        var bDeltaY = Math.abs(creep.pos.y - b.pos.y);
	        var bDelta = Math.sqrt(bDeltaX + bDeltaY);
	        
	        return aDelta < bDelta;
	    });
	    
	    var harvesters = creep.room.find(Game.MY_CREEPS, function(creep) {
	        return creep.memory.role === 'harvester';
	    });
	    var target = sources[0];
	    for (var i in sources) {
	        var count = 0;
	        for (var j in harvesters) {
	            if (harvesters[j].memory.source && 
	                    sources[i].pos.x === harvesters[j].memory.source.x && 
	                    sources[i].pos.y === harvesters[j].memory.source.y) {
	                count++;
	            }
	        }
	        if (count < 3) {
	            target = sources[i];
	        }
	    }
	    
	    creep.memory.source = {
	        id: target.id,
	        x: target.pos.x,
	        y:  target.pos.y
	        
	    }
    }
    
    creep.moveTo(creep.memory.source.x, creep.memory.source.y);
    var sources = creep.pos.findInRange(Game.SOURCES, 1);
    creep.harvest(sources[0]);
    
    if (sources[0] && sources[0].energy == 0) {
        creep.memory.source = null;
    }
}