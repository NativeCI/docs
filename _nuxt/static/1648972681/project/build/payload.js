__NUXT_JSONP__("/project/build", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{document:{slug:"build",description:"How to configure build settings for project?",title:n,position:4,category:"Guides",toc:[{id:o,depth:k,text:p},{id:q,depth:k,text:r},{id:s,depth:k,text:t},{id:u,depth:k,text:v},{id:w,depth:k,text:x},{id:y,depth:k,text:z},{id:A,depth:2,text:B}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"You can configure build settings for your project in \"Build\" tab:\n"},{type:b,tag:m,props:{alt:n,src:"\u002Fimages\u002Fguides\u002Fbuild.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The following settings can be configured:"}]},{type:a,value:c},{type:b,tag:l,props:{id:o},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#language",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Choose the language\u002Fframework and its target framework to build your project without any files (Dockerfile, nginx etc.)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also specify custom "},{type:b,tag:C,props:{},children:[{type:a,value:"Dockerfile"}]},{type:a,value:" for more customizations."}]},{type:a,value:c},{type:b,tag:l,props:{id:q},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#build-command",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Specify how to build your application. In case of \"Go\" apps, the following is the default: "},{type:b,tag:C,props:{},children:[{type:a,value:"go build -o main main.go"}]},{type:a,value:". Each language that you use comes with default build command, you can change it to fit your needs"}]},{type:a,value:c},{type:b,tag:l,props:{id:s},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#folder",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When working with mono-repo (having many apps in the same repo) you can specify which folder to run build it relative to root folder, for example you might have \"frontend\" and \"backend\" and each of them will have their own project, one having \"frontend\" folder and another \"backend\" folder."}]},{type:a,value:c},{type:b,tag:l,props:{id:u},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#dependencies-to-install",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Optional list of packages to install needed to compile your application. For example, "},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{},children:[{type:a,value:"libgtk3-dev"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:w},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#build-environment-variables",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Global tuning settings that can change how your application is built, for example NODE_ENV=production or CGO_ENABLED=0"}]},{type:a,value:c},{type:b,tag:l,props:{id:y},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#public-builds",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Specify whether your build logs can be accessible by any logged user (e.g you can share the link for troubleshooting)"}]},{type:a,value:c},{type:b,tag:"h2",props:{id:A},children:[{type:b,tag:e,props:{ariaHidden:f,href:"#accessing-build-logs",tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All the builds for the project are located in 'Builds' tab:\n"},{type:b,tag:m,props:{alt:"Builds",src:"\u002Fimages\u002Fguides\u002Fbuilds.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Every time you make a commit to your main branch, a build will be scheduled automatically for you. You can also click "},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{},children:[{type:a,value:"Trigger build"}]}]},{type:a,value:", any time you want to run a build."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you click on the latest build, you can access it logs:\n"},{type:b,tag:m,props:{alt:"Build logs",src:"\u002Fimages\u002Fguides\u002Fbuild-logs.png"},children:[]}]},{type:a,value:c},{type:b,tag:"alert",props:{},children:[{type:a,value:"\nIf you are running into issues with build, you can always post your issue at (https:\u002F\u002Fgithub.com\u002FNativeCI\u002FIssues\u002Fissues)[https:\u002F\u002Fgithub.com\u002FNativeCI\u002FIssues\u002Fissues]. You can either upload Raw log or make your build logs public and share the link.\n"}]}]},dir:"\u002Fen\u002Fproject",path:"\u002Fen\u002Fproject\u002Fbuild",extension:".md",createdAt:F,updatedAt:F,to:"\u002Fproject\u002Fbuild"},prev:{title:"Creating project",path:"\u002Fen\u002Fcreate-project",to:"\u002Fcreate-project"},next:{title:"Deployment",path:"\u002Fen\u002Fproject\u002Fdeploy",to:"\u002Fproject\u002Fdeploy"}}],fetch:{},mutations:[]}}("text","element","\n","p","a","true",-1,"span","icon","icon-link",3,"h3","img","Build","language","Language","build-command","Build command","folder","Folder","dependencies-to-install","Dependencies to install","build-environment-variables","Build environment variables","public-builds","Public builds","accessing-build-logs","Accessing build logs","code","em","strong","2022-04-03T07:57:06.138Z")));