google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([
    [ 'Job applications', 'Indeed', 65 ],
    [ 'Job applications', 'Email', 71 ],
    [ 'Job applications', 'LinkedIn', 157 ],
    [ 'Job applications', 'Company Website', 53 ],
    [ 'Job applications', 'Misc', 27 ],
    [ 'Job applications', 'Networking', 12 ],

    [ 'Indeed', 'Rejected/Ghosted', 60 ],
    [ 'Email', 'Rejected/Ghosted', 70 ],
    [ 'LinkedIn', 'Rejected/Ghosted', 132 ],
    [ 'Company Website', 'Rejected/Ghosted', 44 ],
    [ 'Misc', 'Rejected/Ghosted', 20 ],
    [ 'Networking', 'Rejected/Ghosted', 7 ],

    [ 'Networking', '1st Stage Interview', 2 ],
    [ 'Indeed', '1st Stage Interview', 3 ],
    [ 'Email', '1st Stage Interview', 1 ],
    [ 'LinkedIn', '1st Stage Interview', 17 ],
    [ 'Company Website', '1st Stage Interview', 7 ],
    [ 'Misc', '1st Stage Interview', 5 ],

    [ '1st Stage Interview', 'Rejected/Ghosted', 11 ],

    [ 'Indeed', '2nd Stage Interview', 1 ],
    [ 'LinkedIn', '2nd Stage Interview', 4 ],
    [ 'Company Website', '2nd Stage Interview', 1 ],
    [ 'Misc', '2nd Stage Interview', 1 ],

    [ '2nd Stage Interview', 'Offer', 1],
    [ '2nd Stage Interview', 'Withdrew', 2],
    [ '2nd Stage Interview', '3rd Stage???', 3]
  ]);

  var options = {
    width: 800,
    sankey: {
      link: { colorMode: 'source' },
      node: {
        label: { fontSize: 12 },
        colors: [
          '#1f77b4', // Job applications
          '#ff7f0e', // Indeed
          '#2ca02c', // Email
          '#d62728', // LinkedIn
          '#9467bd', // Company Website
          '#8c564b', // Misc
          '#e377c2', // Networking
          '#7f7f7f', // Rejected/Ghosted
          '#bcbd22', // 1st Stage Interview
          '#17becf', // 2nd Stage Interview
          '#aec7e8', // Offer
          '#ffbb78', // Withdrew
          '#98df8a'  // 3rd Stage???
        ]
      }
    }
  };

  var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
  chart.draw(data, options);
}
