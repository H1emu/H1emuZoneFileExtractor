import { readZone } from "h1emu-zone2json";
import { Instance, ZoneFile, ZoneObject } from "types";
import eul2quat from "eul2quat"
import fs from "fs";

const log = (string:string)=>process.stdout.write(string)

const z1_json:ZoneFile = (readZone(fs.readFileSync("../examples/Z1_from15janv2015.zone"), 0) as ZoneFile);

const z1_doors:ZoneObject[] = [];
const z1_items:ZoneObject[] = [];
const z1_npcs:ZoneObject[] = [];
z1_json.objects.forEach((object: ZoneObject) => {
	if (object.actorDefinition.includes("_Placer")) {
		object.instances.forEach((instance: Instance) => {
			instance.rotation = eul2quat(instance.rotation )
		})
		z1_doors.push(object)
	}
	else if (object.actorDefinition.includes("ItemSpawner")) {
		object.instances.forEach((instance: Instance) => {
			instance.rotation = eul2quat(instance.rotation )
		})
		z1_items.push(object)
	}
	else if (object.actorDefinition.includes("NPCSpawner")) {
		object.instances.forEach((instance: Instance) => {
			instance.rotation = eul2quat(instance.rotation )
		})
		z1_npcs.push(object)
	}
});
log("Data extracted, start writing.\n")
fs.existsSync("../data") || fs.mkdirSync("../data")
fs.writeFileSync("../data/Z1_doors.json", JSON.stringify(z1_doors))
fs.writeFileSync("../data/Z1_items.json",JSON.stringify(z1_items))
fs.writeFileSync("../data/Z1_npcs.json", JSON.stringify(z1_npcs))
log("Extraction ended")
