webpackJsonp([1],{"1uuo":function(t,e){},LZzQ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("Zrlr"),i=n.n(r),o=n("wxAW"),s=n.n(o),l=n("vwbq"),u=function(){function t(){i()(this,t)}return s()(t,null,[{key:"appendFront0",value:function(t){return 2!==t.length?"0"+t:t}},{key:"randomColor",value:function(){for(var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e="#",n=0;n<6;n++)e+=t[Math.floor(16*Math.random())];return e}},{key:"getColorStrFromCanvas",value:function(e,n,a){var r=e.getImageData(n,a,1,1).data;return"#"+t.appendFront0(r[0].toString(16))+t.appendFront0(r[1].toString(16))+t.appendFront0(r[2].toString(16))}},{key:"text",value:function(t,e,n,a,r,i){t.font="14px Arial",t.fillStyle=i,t.fillText(e,n,a)}},{key:"wrapText",value:function(t,e,n,a,r,i,o){t.fillStyle=o;for(var s=e.split(" "),l="",u=0;u<s.length;u++){var c=l+s[u]+" ";t.measureText(c).width>r&&u>0?(t.fillText(l,n,a),l=s[u]+" ",a+=i):l=c}t.fillText(l,n,a)}},{key:"roundRect",value:function(t,e,n,a,r,i,o,s){if(void 0===s&&(s=!0),void 0===i&&(i=5),"number"==typeof i)i={tl:i,tr:i,br:i,bl:i};else{var l={tl:0,tr:0,br:0,bl:0};for(var u in l)i[u]=i[u]||l[u]}t.beginPath(),t.moveTo(e+i.tl,n),t.lineTo(e+a-i.tr,n),t.quadraticCurveTo(e+a,n,e+a,n+i.tr),t.lineTo(e+a,n+r-i.br),t.quadraticCurveTo(e+a,n+r,e+a-i.br,n+r),t.lineTo(e+i.bl,n+r),t.quadraticCurveTo(e,n+r,e,n+r-i.bl),t.lineTo(e,n+i.tl),t.quadraticCurveTo(e,n,e+i.tl,n),t.closePath(),o&&t.fill(),s&&t.stroke()}}]),t}(),c=function(){function t(){i()(this,t),this.d3=l,this.init()}return s()(t,[{key:"init",value:function(){this.initVariables(),this.initCanvas(),this.initVirtualNode(),this.setCanvasListener()}},{key:"initVariables",value:function(){this.width=1e3,this.height=1e3,this.padding=20,this.nodeWidth=180,this.nodeHeight=280,this.unitPadding=20,this.unitWidth=140,this.unitHeight=100,this.duration=600,this.scale=1}},{key:"draw",value:function(t){this.data=this.d3.hierarchy(t),this.treeGenerator=this.d3.tree().nodeSize([this.nodeWidth,this.nodeHeight]),this.update();var e=this;this.d3.timer(function(){e.drawCanvas()})}},{key:"update",value:function(t){this.treeData=this.treeGenerator(this.data);var e=this.treeData.descendants(),n=this.treeData.links(),a=0,r=0,i=0,o=0;t&&(a=t.x0,r=t.y0,i=t.x,o=t.y),this.updateOrgUnits(e,a,r,i,o),this.updateLinks(n,a,r,i,o),this.addColorKey(),this.bindNodeToTreeData()}},{key:"updateOrgUnits",value:function(t,e,n,a,r){var i=this.virtualContainerNode.selectAll(".orgUnit").data(t,function(t){return t.colorKey});i.attr("class","orgUnit").attr("x",function(t){return t.x0}).attr("y",function(t){return t.y0}).transition().duration(this.duration).attr("x",function(t){return t.x}).attr("y",function(t){return t.y}).attr("fillStyle","#ff0000"),i.enter().append("orgUnit").attr("class","orgUnit").attr("x",e).attr("y",n).transition().duration(this.duration).attr("x",function(t){return t.x}).attr("y",function(t){return t.y}).attr("fillStyle","#ff0000"),i.exit().transition().duration(this.duration).attr("x",a).attr("y",r).remove(),t.forEach(function(t){t.x0=t.x,t.y0=t.y}),i=null}},{key:"updateLinks",value:function(t,e,n,a,r){var i=this.virtualContainerNode.selectAll(".link").data(t,function(t){return t.source.colorKey+":"+t.target.colorKey});i.attr("class","link").attr("sourceX",function(t){return t.source.x00}).attr("sourceY",function(t){return t.source.y00}).attr("targetX",function(t){return t.target.x00}).attr("targetY",function(t){return t.target.y00}).transition().duration(this.duration).attr("sourceX",function(t){return t.source.x}).attr("sourceY",function(t){return t.source.y}).attr("targetX",function(t){return t.target.x}).attr("targetY",function(t){return t.target.y}),i.enter().append("link").attr("class","link").attr("sourceX",e).attr("sourceY",n).attr("targetX",e).attr("targetY",n).transition().duration(this.duration).attr("sourceX",function(t){return t.source.x}).attr("sourceY",function(t){return t.source.y}).attr("targetX",function(t){return t.target.x}).attr("targetY",function(t){return t.target.y}),i.exit().transition().duration(this.duration).attr("sourceX",a).attr("sourceY",r).attr("targetX",a).attr("targetY",r).remove(),t.forEach(function(t){t.source.x00=t.source.x,t.source.y00=t.source.y,t.target.x00=t.target.x,t.target.y00=t.target.y}),i=null}},{key:"initCanvas",value:function(){this.container=this.d3.select("#container"),this.canvasNode=this.container.append("canvas").attr("class","orgChart").attr("width",this.width).attr("height",this.height),this.hiddenCanvasNode=this.container.append("canvas").attr("class","orgChart").attr("width",this.width).attr("height",this.height).style("visibility","visible"),this.context=this.canvasNode.node().getContext("2d"),this.context.translate(this.width/2,this.padding),this.hiddenContext=this.hiddenCanvasNode.node().getContext("2d"),this.hiddenContext.translate(this.width/2,this.padding)}},{key:"initVirtualNode",value:function(){var t=document.createElement("root");this.virtualContainerNode=this.d3.select(t),this.colorNodeMap={}}},{key:"addColorKey",value:function(){var t=this;this.virtualContainerNode.selectAll(".orgUnit").each(function(){for(var e=t.d3.select(this),n=u.randomColor();t.colorNodeMap[n];)n=u.randomColor();e.attr("colorKey",n),e.data()[0].colorKey=n,t.colorNodeMap[n]=e})}},{key:"bindNodeToTreeData",value:function(){var t=this;this.virtualContainerNode.selectAll(".orgUnit").each(function(){var e=t.d3.select(this);e.data()[0].node=e})}},{key:"drawCanvas",value:function(){this.drawShowCanvas(),this.drawHiddenCanvas()}},{key:"drawShowCanvas",value:function(){this.context.clearRect(-5e4,-1e4,1e5,1e5);var t=this;this.virtualContainerNode.selectAll(".link").each(function(){var e=t.d3.select(this),n=t.d3.linkVertical().x(function(t){return t.x}).y(function(t){return t.y}).source(function(){return{x:e.attr("sourceX"),y:e.attr("sourceY")}}).target(function(){return{x:e.attr("targetX"),y:e.attr("targetY")}}),a=new Path2D(n());t.context.stroke(a)}),this.virtualContainerNode.selectAll(".orgUnit").each(function(){var e=t.d3.select(this),n=e.data()[0].data;t.context.fillStyle="#aaaaaa";var a=Number(e.attr("x"))-t.unitWidth/2,r=Number(e.attr("y"))-t.unitHeight/2;u.roundRect(t.context,a,r,t.unitWidth,t.unitHeight,4,!0,!1),u.text(t.context,n.name,a+t.unitPadding,r+t.unitPadding,"20px","#000000");var i=t.unitWidth-2*t.unitPadding;u.wrapText(t.context,n.title,a+t.unitPadding,r+t.unitPadding+24,i,20)})}},{key:"drawHiddenCanvas",value:function(){this.hiddenContext.clearRect(-5e4,-1e4,1e5,1e5);var t=this;this.virtualContainerNode.selectAll(".orgUnit").each(function(){var e=t.d3.select(this);t.hiddenContext.fillStyle=e.attr("colorKey"),u.roundRect(t.hiddenContext,Number(e.attr("x"))-t.unitWidth/2,Number(e.attr("y"))-t.unitHeight/2,t.unitWidth,t.unitHeight,4,!0,!1)})}},{key:"setCanvasListener",value:function(){this.setClickListener(),this.setDragListener(),this.setMouseWheelZoomListener()}},{key:"setClickListener",value:function(){var t=this;this.canvasNode.node().addEventListener("click",function(e){var n=u.getColorStrFromCanvas(t.hiddenContext,e.layerX,e.layerY),a=t.colorNodeMap[n];a&&(t.toggleTreeNode(a.data()[0]),t.update(a.data()[0]))})}},{key:"setMouseWheelZoomListener",value:function(){var t=this;this.canvasNode.node().addEventListener("mousewheel",function(e){e.preventDefault(),e.deltaY<0?t.bigger():t.smaller()})}},{key:"setDragListener",value:function(){this.onDrag_=!1,this.dragStartPoint_={x:0,y:0};var t=this;this.canvasNode.node().onmousedown=function(e){t.dragStartPoint_.x=e.x,t.dragStartPoint_.y=e.y,t.onDrag_=!0},this.canvasNode.node().onmousemove=function(e){t.onDrag_&&(t.context.translate((e.x-t.dragStartPoint_.x)/t.scale,(e.y-t.dragStartPoint_.y)/t.scale),t.hiddenContext.translate((e.x-t.dragStartPoint_.x)/t.scale,(e.y-t.dragStartPoint_.y)/t.scale),t.dragStartPoint_.x=e.x,t.dragStartPoint_.y=e.y)},this.canvasNode.node().onmouseout=function(e){t.onDrag_&&(t.onDrag_=!1)},this.canvasNode.node().onmouseup=function(e){t.onDrag_&&(t.onDrag_=!1)}}},{key:"toggleTreeNode",value:function(t){t.children?(t._children=t.children,t.children=null):(t.children=t._children,t._children=null)}},{key:"bigger",value:function(){this.scale>7||(this.context.clearRect(-1e6,-1e4,2e6,2e6),this.hiddenContext.clearRect(-1e6,-1e4,2e6,2e6),this.scale=5*this.scale/4,this.context.scale(5/4,5/4),this.hiddenContext.scale(5/4,5/4))}},{key:"smaller",value:function(){this.scale<.2||(this.context.clearRect(-1e6,-1e4,2e6,2e6),this.hiddenContext.clearRect(-1e6,-1e4,2e6,2e6),this.scale=4*this.scale/5,this.context.scale(.8,.8),this.hiddenContext.scale(.8,.8))}}]),t}(),d=function(){function t(){i()(this,t)}return s()(t,null,[{key:"generateOrgChartData",value:function(t){for(var e={name:"Lao Lao",title:"general manager",children:[{name:"Bo Miao",title:"department manager"},{name:"Su Miao",title:"department manager",children:[{name:"Tie Hua",title:"senior engineer"},{name:"Hei Hei",title:"senior engineer",children:[{name:"Pang Pang",title:"engineer"},{name:"Xiang Xiang",title:"UE engineer"}]}]},{name:"Hong Miao",title:"department manager"},{name:"Chun Miao",title:"department manager"}]},n=0;n<3;n++)e.children.push({name:"Lao Lao",title:"general manager",children:[{name:"Bo Miao",title:"department manager"},{name:"Su Miao",title:"department manager",children:[{name:"Tie Hua",title:"senior engineer"}]}]});for(var a=e,r=0;r<t;r++)a.children||(a.children=[]),a.children.push({name:"Lao Lao",title:"general manager",children:[{name:"Bo Miao",title:"department manager"},{name:"Su Miao",title:"department manager",children:[{name:"Tie Hua",title:"senior engineer"},{name:"Hei Hei",title:"senior engineer",children:[{name:"Xiang Xiang",title:"UE engineer"}]}]}]}),a=a.children[0];return e}}]),t}(),h={name:"App",data:function(){return{orgChart:null,isDraw:!1}},created:function(){this.orgChart=new c},methods:{test:function(t){var e=d.generateOrgChartData(t);this.orgChart.draw(e),this.isDraw=!0},bigger:function(){this.orgChart.bigger()},smaller:function(){this.orgChart.smaller()}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"column","vertical-align":"top"}},[n("button",{staticStyle:{margin:"20px"},attrs:{disabled:t.isDraw},on:{click:function(e){t.test(10)}}},[t._v("Draw Small Company (10+ row)")]),t._v(" "),n("button",{staticStyle:{margin:"20px"},attrs:{disabled:t.isDraw},on:{click:function(e){t.test(100)}}},[t._v("Draw Medium Company(100+ row)")]),t._v(" "),n("button",{staticStyle:{margin:"20px"},attrs:{disabled:t.isDraw},on:{click:function(e){t.test(1e3)}}},[t._v("Draw Big Company(1000+ row)")]),t._v(" "),n("button",{staticStyle:{margin:"20px"},on:{click:function(e){t.bigger()}}},[t._v("+")]),t._v(" "),n("button",{staticStyle:{margin:"20px"},on:{click:function(e){t.smaller()}}},[t._v("-")])])},staticRenderFns:[]};var v=n("VU/8")(h,g,!1,function(t){n("LZzQ")},null,null).exports,f=n("/ocq"),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var y=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},m,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports;a.a.use(f.a);var p=new f.a({routes:[{path:"/",name:"HelloWorld",component:y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:v},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.f612c97ea544b8207430.js.map