const testFolder = './public/api/projects';
const fs = require('fs');
const { stringify } = require('querystring');



//list each project
let projectList = {}
//list tags (no repeat) used as a dictionary
let projectsTags = {};
//list tags used as array to create a file
let noRepeatTags = [];

let cleanedProjectList = {};
cleanedProjectList["projects"] = [];



//get all JSON files inside the folder
let files = [...fs.readdirSync(testFolder)];

//open each file and get its tags
files.forEach(element => {
  let path = testFolder + "/" + element
  let data = fs.readFileSync(path)
  let dataparsed = JSON.parse(data)
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
for (const [id, proj] of Object.entries(projectList)) {
  let temp = {}
  temp["id"] = proj["id"]
  temp["name"] = proj["name"]
  temp["year"] = proj["year"]
  temp["description"] = proj["description"]
  temp["category"] = proj["category"]
  temp["face"] = proj["face"]
  temp["tags"] = proj["tags"]
  cleanedProjectList["projects"].push(temp)
}


fs.writeFileSync('./public/api/tags.json',JSON.stringify(noRepeatTags, null), "utf-8")
fs.writeFileSync('./public/api/mappedByTags.json',JSON.stringify(projectsTags, null), "utf-8")
fs.writeFileSync('./public/api/cleanedProjectList.json',JSON.stringify(cleanedProjectList, null, 4), "utf-8")