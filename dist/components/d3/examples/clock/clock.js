function fields(){function t(){return 32-(new Date(e.getYear(),e.getMonth(),32)).getDate()}var e=new Date,n=(e.getSeconds()+e.getMilliseconds()/1e3)/60,r=(e.getMinutes()+n)/60,i=(e.getHours()+r)/24,s=(e.getDay()+i)/7,o=(e.getDate()-1+i)/t(),u=(e.getMonth()+o)/12;return[{value:n,index:.7,text:fsec(e)},{value:r,index:.6,text:fmin(e)},{value:i,index:.5,text:fhou(e)},{value:s,index:.3,text:fwee(e)},{value:o,index:.2,text:fdat(e)},{value:u,index:.1,text:fmon(e)}]}var width=960,height=700,radius=Math.min(width,height)/1.8,sectorWidth=.09,fsec=d3.time.format("%S s"),fmin=d3.time.format("%M m"),fhou=d3.time.format("%H h"),fwee=d3.time.format("%a"),fdat=d3.time.format("%d d"),fmon=d3.time.format("%b"),fill=d3.scale.linear().range(["hsl(-180, 50%, 50%)","hsl(180, 50%, 50%)"]).interpolate(d3.interpolateString),arc=d3.svg.arc().startAngle(0).endAngle(function(e){return e.value*2*Math.PI}).innerRadius(function(e){return e.index*radius}).outerRadius(function(e){return(e.index+sectorWidth)*radius}),vis=d3.select("#clock").append("svg").attr("width",width).attr("height",height).append("g").attr("transform","translate("+width/2+","+height/2+")"),g=vis.selectAll("g").data(fields).enter().append("g");g.append("path").style("fill",function(e){return fill(e.value)}).attr("d",arc),g.append("text").attr("text-anchor","middle").attr("dy","1em").text(function(e){return e.text}),d3.timer(function(){var e=vis.selectAll("g").data(fields);e.select("path").style("fill",function(e){return fill(e.value)}).attr("d",arc),e.select("text").attr("dy",function(e){return e.value<.5?"-.5em":"1em"}).attr("transform",function(e){return"rotate("+360*e.value+")"+"translate(0,"+ -(e.index+sectorWidth/2)*radius+")"+"rotate("+(e.value<.5?-90:90)+")"}).text(function(e){return e.text})})