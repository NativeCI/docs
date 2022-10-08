__NUXT_JSONP__("/examples/nodejs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{document:{slug:"nodejs",description:"How to Build and Deploy NodeJs project?",title:s,position:37,category:"Learn by example",toc:[{id:t,depth:2,text:u}],body:{type:"root",children:[{type:b,tag:"description",props:{},children:[{type:a,value:"\nHow to Build and Deploy NodeJs project?\n"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you do not have code ready, you can fork the repository being used in this example: "},{type:b,tag:v,props:{href:w,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:w}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:s,src:"\u002Fimages\u002Flanguages\u002Fnodejs.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We are going to deploy a hello-world express application for NodeJs, follow along to find different ways you can customise your NodeJs deployment."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:t},children:[{type:b,tag:v,props:{href:"#guide",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:e,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Choose your repo first:\n"},{type:b,tag:m,props:{alt:"Choose repo",src:"\u002Fimages\u002Fintro\u002Fchoose-repo.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, select NodeJs deployment:\n"},{type:b,tag:m,props:{alt:"NodeJs select",src:"\u002Fimages\u002Fexamples\u002Fnodejs-choose.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To choose a correct NodeJS version, open up the terminal and type the command below:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,"language-text"]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"$ node --version\nv14.0.0\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Choose the major version output, e.g 16 or 14."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On the final screen, enter the following settings:\n"},{type:b,tag:m,props:{alt:"NodeJs settings",src:"\u002Fimages\u002Fexamples\u002Fnodejs-settings.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Build command"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#Default build command"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:r}]},{type:a,value:" run build\n\n"},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#Run tests first"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:r}]},{type:a,value:" run "},{type:b,tag:e,props:{className:[f,"builtin","class-name"]},children:[{type:a,value:"test"}]},{type:a,value:x},{type:b,tag:e,props:{className:[f,"operator"]},children:[{type:a,value:"&&"}]},{type:a,value:x},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:r}]},{type:a,value:" run build\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Folder"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#For monorepo example"}]},{type:a,value:"\nnodejs-helloworld\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Port to expose"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#Choose port 3000 as ssl is provided automatically"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Deploy folder"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#Keep empty by default"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Run command"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#Default launch command"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:r}]},{type:a,value:" run start\n"},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"#If no script provided, run main file"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:"node"}]},{type:a,value:" app.js\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After that you can visit your website and see how easy it was to deploy it:\n"},{type:b,tag:m,props:{alt:"Deployed",src:"\u002Fimages\u002Fexamples\u002Fnodejs-deployed.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment."}]}]},dir:"\u002Fen\u002Fexamples",path:"\u002Fen\u002Fexamples\u002Fnodejs",extension:".md",createdAt:y,updatedAt:y,to:"\u002Fexamples\u002Fnodejs"},prev:{title:"NuxtJs",path:"\u002Fen\u002Fexamples\u002Fnuxtjs",to:"\u002Fexamples\u002Fnuxtjs"},next:null}],fetch:{},mutations:[]}}("text","element","\n","p","span","token","comment","div","nuxt-content-highlight","pre","line-numbers","code","img","strong",":","language-bash","function","npm","NodeJs","guide","Guide","a","https:\u002F\u002Fgithub.com\u002Fpaladium\u002Fnativeci-demos"," ","2022-10-08T11:59:43.014Z")));