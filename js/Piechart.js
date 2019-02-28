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


    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });


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
        var datapoints=[];
        var pt1=Math.floor(Math.random()*10);
        var pt2=Math.floor(Math.random()*10);
        while(pt1==pt2){
            pt2=Math.floor(Math.random()*10);
        }
        //sort 2 points in order
        if (pt1<pt2){
            points.push(pt1);
            points.push(pt2);
            datapoints.push(data[pt1]);
            datapoints.push(data[pt2]);
        }
        else{
            points.push(pt2);
            points.push(pt1);
            datapoints.push(data[pt2]);
            datapoints.push(data[pt1]);
        }


g.selectAll("circle")
         .data(pie(datapoints))
         .enter()
          .append("circle")
          .attr("transform", function(d) {return "translate(" + arc.centroid(d)  + ")"})
          .style("fill","black")
          .attr("r",3);


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
