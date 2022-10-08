__NUXT_JSONP__("/examples/java_gradle", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{document:{slug:"java_gradle",description:"How to deploy Java-based Gradle project?",title:"Java Gradle",position:33,category:"Learn by example",toc:[{id:q,depth:2,text:r}],body:{type:"root",children:[{type:b,tag:"description",props:{},children:[{type:a,value:"\nHow to deploy Java-based Gradle project?\n"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you do not have code ready, you can fork the repository being used in this example: "},{type:b,tag:t,props:{href:u,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:u}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"Gradle",src:"\u002Fimages\u002Flanguages\u002Fgradle.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We are going to deploy a simple hello world java api, that will have a single endpoint:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002F -\u003E Hello world\n"}]}]}]},{type:a,value:c},{type:b,tag:"h2",props:{id:q},children:[{type:b,tag:t,props:{href:"#guide",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:j,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Choose your repo first:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{alt:"Choose repo",src:"\u002Fimages\u002Fintro\u002Fchoose-repo.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, select JavaGradle deployment:\n"},{type:b,tag:m,props:{alt:"Java Gradle select",src:"\u002Fimages\u002Fexamples\u002Fjava-gradle-choose.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To choose a correct Java version, open up the terminal and type:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ java --version\nPicked up _JAVA_OPTIONS: -Xmx1024M\nopenjdk 11.0.9.1 2020-11-04\nOpenJDK Runtime Environment AdoptOpenJDK (build 11.0.9.1+1)\nOpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.9.1+1, mixed mode)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Choose major version like "},{type:b,tag:e,props:{},children:[{type:a,value:"11"}]},{type:a,value:" or "},{type:b,tag:e,props:{},children:[{type:a,value:"13"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On the final screen, enter the following settings:\n"},{type:b,tag:m,props:{alt:"Java Gradle settings",src:"\u002Fimages\u002Fexamples\u002Fjava-gradle-settings.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Build command"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,p]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:a,value:"#Default build command, will create out folder"}]},{type:a,value:"\ngradle build --no-daemon\n\n"},{type:b,tag:j,props:{className:[k,l]},children:[{type:a,value:"#Run tests first"}]},{type:a,value:"\ngradle buildAndTest --no-daemon\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Folder"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,p]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:a,value:"#For monorepo example"}]},{type:a,value:"\njava-gradle-helloworld\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Port to expose"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,p]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:a,value:"#Choose port 8080 (default) as ssl is provided automatically"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Deploy folder"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,p]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:a,value:"#Build command deploys into out"}]},{type:a,value:"\nbuild\u002Flibs\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Run command"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,p]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:a,value:"#Take project name from settings.gradle: rootProject.name-version.jar"}]},{type:a,value:"\njava -jar java-gradle-helloworld-0.0.1-SNAPSHOT.jar\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After that you can visit your api and see how easy it was to deploy it:\n"},{type:b,tag:m,props:{alt:"Deployed",src:"\u002Fimages\u002Fexamples\u002Fjava-gradle-deployed.png"},children:[]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note: if you need to configure which spring profile file to use, set environment variable SPRING_PROFILES_ACTIVE to production\u002Fdev\u002Fstaging - "},{type:b,tag:"nuxt-link",props:{to:"\u002Fapps\u002Fenvs"},children:[{type:a,value:"Set runtime environment variables"}]}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fexamples",path:"\u002Fen\u002Fexamples\u002Fjava_gradle",extension:".md",createdAt:w,updatedAt:w,to:"\u002Fexamples\u002Fjava_gradle"},prev:{title:"C# NetCore",path:"\u002Fen\u002Fexamples\u002Fnetcore",to:"\u002Fexamples\u002Fnetcore"},next:{title:"Java Maven",path:"\u002Fen\u002Fexamples\u002Fjava_maven",to:"\u002Fexamples\u002Fjava_maven"}}],fetch:{},mutations:[]}}("text","element","\n","p","code","div","nuxt-content-highlight","pre","line-numbers","span","token","comment","img","strong",":","language-bash","guide","Guide","blockquote","a","https:\u002F\u002Fgithub.com\u002Fpaladium\u002Fnativeci-demos","language-text","2022-10-08T11:59:43.014Z")));