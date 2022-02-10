const testFolder = './public/api/projects';
const fs = require('fs');
const { stringify } = require('querystring');



//list each project
let projectList = {}
//list tags (no repeat) used as a dictionary
let projectsTags = {};
//list tags used as array to create a file
let noRepeatTags = [];



//get all JSON files inside the folder
files = [...fs.readdirSync(testFolder)];

//open each file and get its tags
files.forEach(element => {
  let path = testFolder + "/" + element
  data = fs.readFileSync(path)
  dataparsed = JSON.parse(data)
  dataparsed.tags.forEach(tag =>{
    projectsTags[tag] = [];
  })
  projectList[dataparsed.id] = dataparsed
});

for (const [key, value] of Object.entries(projectsTags)) {
  noRepeatTags.push(key)
  for (const [id, proj] of Object.entries(projectList)) {
    if(proj.tags.indexOf(key)!==-1){
      projectsTags[key].push(proj.id);
    }
  }
}
fs.writeFileSync('./public/api/tags.json',JSON.stringify(noRepeatTags, null), "utf-8")
fs.writeFileSync('./public/api/mappedByTags.json',JSON.stringify(projectsTags, null), "utf-8")