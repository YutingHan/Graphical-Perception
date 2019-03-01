Assignment 3 - Replicating a Classic Experiment  
===
Meijie Wang, Yuting Han, Zhiyi Huang
-------


Survey Link: 
https://yutinghan.github.io/03-Experiment

A controlled experiment to test human perception of graphic area is built following the style from Cleveland and McGill's 1984 paper closely. Three competing visualizations are chosen: Stacked Area Chart, Bubble Chart and Pie Chart. In each chart, 10 randomly generated white regions are presented and 2 of them indicated by black dots are randomly chosen for area comparison.

This experiment is run with 20 trials per visualization type and is supported by 13 participants. To implement the performance, the error calculation function from Cleveland and McGill's 1984 paper is used.
<p align="center">
Error=log<sub>2</sub>( | judged percent - true percent | + 1/8 )
</p>
The average error and Bootstrapped 95% confidence intervals are analyzed.


Three competing visualizations
===
Three competing visualizations are built by d3 and generated with random datasets.
When generating the random dataset, the lower and higher bounds are set to make sure the readability. 

Stacked Area Charts
------
Stacked area chart is often used to compare multiple variables' changing over an interval and the area bewtween lines is an important quantitative variable presented.

When building the visualization model, 11 lines are drawing to construct 10 areas and for simplicity, 3 points are created in each line.
To simulate the real data and reflect a trend, the middle point is set lower than the other two points.

<p align="center">
<img src="img/linechart.png" height="50%" width="50%">
</p>

Bubble Charts
-------
In this chart, we considered that participants may judge the radius of each bubble, a.k.a length instead of the area, may violate our design purpose. So, for the two dots in the bubble we don't set them at the centorid position to avoid that.  
![bubblechart.png](img/bubblechart.png)

Pie Charts
------
![PieChart.png](img/PieChart.png)

Show the experiment
===
Set the input should be among 0 to 1, when finished one image, click "Next" button to continue the experiment.
Display the progress throughout the experiment for participants to check out.
Display the introduction parts for participants to understand the experiment.
For the experiment, make some alertings for the paticipants, the below two gifs show that if the input outside the setting range, shows an invail input alert, and when finished whole test, show the work done. 

We also upload one example of the whole experiment video in the result file.
![ggplot2](Show1.gif)
# 
![ggplot2](Show2.gif)


Hypotheses
===
1.Participants will make more accurate measurements with the Bubble Chart than the Stacked Area Chart.
2.Participants will make more accurate measurements with the Pie Chart than the Bubble Chart.
3.Participants will make the least accurate measurements with the Stacked Area Chart.


Results
===
1). With all the experiment data we got, we got the conclusion base on our data that among these three different types of charts, human perception of graphic area works with Pie Chart, Bubble Chart and Stacked Area Chart in the descending order.
#
2). Among our hypotheses, all the three were confirmed. The results order of Pie chart, Bubble chart and Stacked Line Chart is same with the cleveland results below. 
![cleveland results](img/cleveland-results.png)
#
3). However, except the order, we find that the real error we caculated has a huge difference with the cleveland results. The AverageError we got of Pie chart and Bubble chart are about 0.5 larger than cleveland results. 
#
4). We also follow previous studies in using bootstrapping to calculate the mean confidence intervals for each chart and
priming combination. The resulting confidence intervals are shown below.
#
5). Our experiment adhered to a between-subjects design. We excluded participants who incorrectly answered the story verification question, as well as those who either failed to answer or put the same answer for multiple questions. For example, the answer was 50% away from the correct answer and put all the 0.3 during the whole experiment.

![AvgError.png](result/AvgError.png)
#
![BSCI.png](result/BSCI.png)
Discussion 
------
1). Pie Chart area for human perception may also affect by the angle.
2). Due to the limit participants, time of participants paid in the experiment, the real results data may not consisitant exactly with previous work.




Technical Achievements
===
Set the definite range of the random data for readability.
Pick the theme of area to test during this replication of the seminal Cleveland Mcgill experiment.
For differnet function generate differnet range of the data.
Consider the length and angle affection during the experiment and solve it.


Design Achievements
===
Display the progress throughout the survey to the participant.
Notifying the participant of invalid input.
alerting completion with a thank you message for the participant at the end of the experiment.
Aesthetically pleasing design.




Sourcesfor Inspiration:
-----
- Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American statistical association, 79(387), 531-554.
- Harrison, L., Skau, D., Franconeri, S., Lu, A., & Chang, R. (2013, April). Influencing visual judgment through affective priming. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 2949-2958). ACM.


