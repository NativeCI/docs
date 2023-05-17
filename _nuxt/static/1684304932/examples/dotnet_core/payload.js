__NUXT_JSONP__("/examples/dotnet_core", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{document:{slug:"dotnet_core",description:"How to deploy C# based .NetCore project?",title:"C# NetCore",position:32,category:"Learn by example",toc:[{id:t,depth:2,text:u}],body:{type:"root",children:[{type:b,tag:"description",props:{},children:[{type:a,value:"\nHow to deploy C# based .NetCore project?\n"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you do not have code ready, you can fork the repository being used in this example: "},{type:b,tag:w,props:{href:x,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:x}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:o,props:{alt:"NetCore",src:"\u002Fimages\u002Flanguages\u002Fdotnet_core.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"We are going to deploy a simple hello world dotnet api, that will have a single endpoint:"}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,"language-text"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fapi\u002Fvalues\n"}]}]}]},{type:a,value:c},{type:b,tag:"h2",props:{id:t},children:[{type:b,tag:w,props:{href:"#guide",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:d,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choose your repo first:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:o,props:{alt:"Choose repo",src:"\u002Fimages\u002Fintro\u002Fchoose-repo.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Next, select DotnetCore deployment:\n"},{type:b,tag:o,props:{alt:"Dotnet select",src:"\u002Fimages\u002Fexamples\u002Fdotnet-core-choose.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To choose a correct Dotnet version, open up the project and find your "},{type:b,tag:g,props:{},children:[{type:a,value:".csproj"}]},{type:a,value:" file:"}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,"language-xml"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:z}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:s}]}]},{type:a,value:"\n    "},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:A}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:s}]}]},{type:a,value:"net6.0"},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:B}]},{type:a,value:A}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:B}]},{type:a,value:z}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:s}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Choose the version TargetFramework, e.g 2.1 or 6.0."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"On the final screen, enter the following settings:\n"},{type:b,tag:o,props:{alt:"DotnetCore settings",src:"\u002Fimages\u002Fexamples\u002Fdotnet-core-settings.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Build command"}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,r]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"#Default build command, will create out folder"}]},{type:a,value:"\ndotnet publish -c Release -o out\n\n"},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"#Run tests first"}]},{type:a,value:"\ndotnet "},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:"test"}]},{type:a,value:" "},{type:b,tag:d,props:{className:[e,"operator"]},children:[{type:a,value:"&&"}]},{type:a,value:" dotnet publish -c Release -o out\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Folder"}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,r]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"#For monorepo example"}]},{type:a,value:"\ndotnet-helloworld\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Port to expose"}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,r]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"#Choose port 80 (default) as ssl is provided automatically"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Deploy folder"}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,r]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"#Build command deploys into out"}]},{type:a,value:"\nout\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Run command"}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,r]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"#Take project name"}]},{type:a,value:"\ndotnet dotnet-helloworld.dll\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"After that you can visit your api and see how easy it was to deploy it:\n"},{type:b,tag:o,props:{alt:"Deployed",src:"\u002Fimages\u002Fexamples\u002Fdotnet-core-deployed.png"},children:[]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Note: if you need to configure which settings file to use, set environment variable ASPNETCORE_ENVIRONMENT to Production - "},{type:b,tag:"nuxt-link",props:{to:"\u002Fapps\u002Fenvs"},children:[{type:a,value:"Set runtime environment variables"}]}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fexamples",path:"\u002Fen\u002Fexamples\u002Fdotnet_core",extension:".md",createdAt:C,updatedAt:C,to:"\u002Fexamples\u002Fdotnet_core"},prev:{title:"AngularJS",path:"\u002Fen\u002Fexamples\u002Fangularjs",to:"\u002Fexamples\u002Fangularjs"},next:{title:"Java Gradle",path:"\u002Fen\u002Fexamples\u002Fjava_gradle",to:"\u002Fexamples\u002Fjava_gradle"}}],fetch:{},mutations:[]}}("text","element","\n","span","token","p","code","tag","punctuation","div","nuxt-content-highlight","pre","line-numbers","comment","img","strong",":","language-bash","\u003E","guide","Guide","blockquote","a","https:\u002F\u002Fgithub.com\u002Fpaladium\u002Fnativeci-demos","\u003C","PropertyGroup","TargetFramework","\u003C\u002F","2023-05-17T06:27:59.879Z")));