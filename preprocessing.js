const testFolder = './public/api/projects';
const fs = require('fs');
const { stringify } = require('querystring');


files = [...fs.readdirSync(testFolder)];


let projectsTags = {};
files.forEach(element => {
  let path = testFolder + "/" + element
  data = fs.readFileSync(path)
  dataparsed = JSON.parse(data)
  // projectsTags.push(dataparsed.tags)
  dataparsed.tags.forEach(tag =>{
    projectsTags[tag] = "";
  })
});

let noRepeatTags = [];
for (const [key, value] of Object.entries(projectsTags)) {
  noRepeatTags.push(key)
}
fs.writeFileSync('./public/api/tags.json',JSON.stringify(noRepeatTags, null), "utf-8")