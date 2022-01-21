import { ImgPost } from './entry';
import { Project } from "./project";
import { MiniGallery } from './entry';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: "Mabel",
    year: 2021,
    description:"Made for studying workflow between zbrush, maya and substance painter. Mabel is a character from the cartoon called Gravity Falls.",
    category:["portfolio"],
    face:'assets/inteira.png',
    // face:'https://i.picsum.photos/id/769/1000/1000.jpg?hmac=BYvHPdPEy5-BeXSoyo0vfxUQ69MWtOTopFlqsqkWiQg',
    tags:["3d", "lookdev", "modeling"],
    post:[
      // {imgPath:"assets/mabel/mabel_inteira.png",
      // description:"Final Render"},
      {imgPath:"assets/mabel/detalhe_pe.png",
      description:""},
      {imgPath:"assets/mabel/detalhe_camisa.png",
      description:""},
      {gallery:[
        {imgPath:"assets/mabel/ambient_light.png",
        description:"Ambient_light"},
        {imgPath:"assets/mabel/ao.png",
        description:"Ambient occlusion"},
        {imgPath:"assets/mabel/fill_light.png",
        description:"fill_light"},
        {imgPath:"assets/mabel/key_fill_light.png",
        description:"key_fill_light"},
        {imgPath:"assets/mabel/rim_light.png",
        description:"rim_light"},
      ],
      description:"composicao de luzes",
      }
    ]
  },
  {
    id: 1,
    name: "Retornável",
    year: 2015,
    description:"",
    category:["portfolio"],
    face:'assets/img_retornavel.jpg',
    tags:["animation", "character design", "story board"],
    post:[
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
    ]
  },
  {
    id: 2,
    name: "Blue Robot",
    year: 2021,
    description:"",
    category:["portfolio"],
    face:'assets/img_bluerobot.jpg',
    tags:["3d", "lookdev", "modeling", 'rigging', 'animation'],
    post:[
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
    ]
  },
  {
    id: 3,
    name: "Tea Time",
    year: 2021,
    description:"",
    category:["portfolio"],
    face:'assets/img_tea.jpg',
    tags:["digital watercolor", 'illustration'],
    post:[
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
    ]
  },
  {
    id: 4,
    name: "Código camões",
    year: 2018,
    description:"",
    category:["portfolio"],
    face:'assets/img_camoes.jpg',
    tags:['illustration', 'children book'],
    post:[
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
    ]
  },
  {
    id: 5,
    name: "Deu a louca no mundo",
    year: 2019,
    description:"",
    category:["portfolio"],
    face:'assets/img_mundo.jpg',
    tags:['illustration', 'children book'],
    post:[
      {imgPath:"assets/img_mabel.jpg",
      description:"Mabel"},
    ]
  },
]
