function Piechart(canvas){
  visType = "Pie";
    //generate data
    var data = [];
    for (var i = 0; i < 10; i++) {
          //var newNumber = Math.random(17,20);
          var newNumber = Math.floor(Math.random() * 10) + 3;
          data.push(newNumber);
        }

    var radius = Math.min(width,height)/2;

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0)

    var labelArc = d3.arc()
        .outerRadius(radius - 50)
        .innerRadius(radius - 50);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });

    // var svg = d3.select("body").append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //   .append("g")
    //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.select("body").append("svg")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g=svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      g.append("path")
          .attr("d", arc)
          .style("fill","white");

    //random 2 areas and draw two points
        //random two areas
        var points=[];
        var pt1=Math.floor(Math.random()*10);
        var pt2=Math.floor(Math.random()*10);
        while(pt1==pt2){
            pt2=Math.floor(Math.random()*10);
        }
        //sort 2 points in order
        if (pt1<pt2){
            points.push(pt1);
            points.push(pt2);
        }
        else{
            points.push(pt2);
            points.push(pt1);
        }

g.selectAll("circle")
         .data(pie(points))
         .enter()
          .append("circle")

         // .filter(function(d){return d>pie(1000000000);})
         .attr('transform', function(d, i){
      var x = arc.centroid(d)[0] * 1.5;
      var y = arc.centroid(d)[1] * 1.5;
      return 'translate(' + x + ', ' + y + ')';
    })
          // .attr("transform", function(d) {
          // return "translate(" + labelArc.centroid(d) + ")"})
          .attr("dy", ".15em")
       //   .filter(function(d){return d>0.5})
          .style("fill","black")
        //  .attr("class","circle")
          .attr("r",3);
         // .text(function(d) { return d.data; });


      var ratio= data[points[0]]/data[points[1]];
      var ratio_s= data[points[1]]/data[points[0]];
      if(ratio_s < ratio ){
        ratio = ratio_s
      }

      console.log(ratio);

      truePercent = ratio;
      index_diff = points[1]-points[0];
      numVis3--;
      trialNum++;
    }
