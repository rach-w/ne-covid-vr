d3.csv("Douglas_data.csv", conversor, graphDouglas)

function conversor (d){
    d.percentile = +d.percentile;
    return d;
}

function graphDouglas (WW_data){
        var scene = d3.select('a-scene')
        var spheres = scene.selectAll('a-sphere')
            .data(WW_data);
        
        spheres.enter()
            .append('a-sphere')
            .merge(spheres)
            .attr("radius", function (d){
                return d.percentile /350;             
            })
            .attr("position",  function(d, i){
                return  "3 3 " + (-2+ i/3);
            })
            .attr("color", "red")
            .attr("id", "douglasGraph")
            .attr("visible", false);

        var dlabels = scene.selectAll('.dlabel')
            .data(WW_data);
        
        dlabels.enter()
            .append('a-text')
            .merge(dlabels)
            .attr("value", function(d) {
              return d.date_start;
            })
            .attr("position", function(d, i) {
              return "3 3.3 " + (-2 + i/3);
            })
            .attr("color", "white")
            .attr("visible", false)
            .attr('width', "1")
            .attr("class", "dlabel");
        
          spheres.exit().remove();
          dlabels.exit().remove();
        }
        
    
//display graph when douglas county is clicked on
var Douglasdisplaytoggle = d3.select('#douglas')
var clicked = false
    Douglasdisplaytoggle.on('click', function (){
        if (clicked == false) {
            d3.select('a-scene')
            .selectAll('a-sphere, .dlabel')
            .attr('visible', true)
            clicked = true
    }   
        else {
            d3.select('a-scene')
            .selectAll('a-sphere, .dlabel')
            .attr('visible', false)
            clicked = false
        }})


//lancaster county

d3.csv("Lancaster_data.csv", conversor, graphLancaster)

function conversor (d){
    d.percentile = +d.percentile;
    return d;
}

function graphLancaster (WW_data){
        var scene = d3.select('a-scene')
        var cones = scene.selectAll('a-cone')
            .data(WW_data);
        
        cones.enter()
            .append('a-cone')
            .merge(cones)
            .attr("height", function (d){
                return d.percentile /100;             
            })
            .attr("radius-bottom", "0.1")
            .attr("radius-top","0.01")
            .attr("position",  function(d, i){
                return  "3 2 " + (-2+ i/3);
            })
            .attr("color", "yellow")
            .attr("id", "lancasterGraph")
            .attr("visible", false);
        
        var llabels = scene.selectAll('.llabel')
            .data(WW_data)

        llabels.enter()
            .append('a-text')
            .merge(llabels)
            .attr("value", function(d) {
              return d.date_start;
            })
            .attr("position", function(d, i) {
              return "3 2.5 " + (-2 + i/3);
            })
            .attr("color", "white")
            .attr("visible", false)
            .attr('width', "1")
            .attr("class", "llabel");
        
        spheres.exit().remove();
        llabels.exit().remove();
        
    
}

//display graph when douglas county is clicked on
var Scottsbluffdisplaytoggle = d3.select('#lancaster')
    var clicked = false
    Scottsbluffdisplaytoggle.on('click', function (){
        if (clicked == false) {
            d3.select('a-scene')
            .selectAll('a-cone, .llabel')
            .attr('visible', true)
            clicked = true
    }   
        else {
            d3.select('a-scene')
            .selectAll('a-cone, .llabel')
            .attr('visible', false)
            clicked = false
        }});
        d3.csv("Lancaster_data.csv", conversor, graphScottsbluff)

        function conversor (d){
            d.percentile = +d.percentile;
            return d;
        }
        
function graphScottsbluff (WW_data){
                var scene = d3.select('a-scene')
                var cylinders = scene.selectAll('a-cylinder')
                    .data(WW_data);
                
                cylinders.enter()
                    .append('a-cylinder')
                    .merge(cylinders)
                    .attr("height", function (d){
                        return d.percentile /100;             
                    })
                    .attr("radius", "0.1")
                    .attr("position",  function(d, i){
                        return  "3 4 " + (-2+ i/3);
                    })
                    .attr("color", "blue")
                    .attr("id", "scottsbluffGraph")
                    .attr("visible", false);
                
                var slabels = scene.selectAll('.slabel') 
                    .data(WW_data)

                slabels.enter()
                    .append('a-text')
                    .merge(slabels)
                    .attr("value", function(d) {
                      return d.date_start;
                    })
                    .attr("position", function(d, i) {
                      return "3 5 " + (-2 + i/3);
                    })
                    .attr("color", "white")
                    .attr("visible", false)
                    .attr('width', "1")
                    .attr("class", "slabel");
                
                
    

                cylinders.exit().remove();
                slabels.exit().remove();
                
            
        }
        
        //display graph when douglas county is clicked on
        var Scottsbluffdisplaytoggle= d3.select('#scottsbluff')
            var clicked = false
            Scottsbluffdisplaytoggle.on('click', function (){
                if (clicked == false) {
                    d3.select('a-scene')
                    .selectAll('a-cylinder, .slabel')
                    .attr('visible', true)
                    clicked = true
            }   
                else {
                    d3.select('a-scene')
                    .selectAll('a-cylinder, .slabel')
                    .attr('visible', false)
                    clicked = false
                }})


    