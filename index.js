// chartoptions = {

//     series: [{
//         data: [30, 40, 50, 60, 70, 80]
//     }],
//     chart: {
//         type: 'bar',
//         height: 400,
//         width: 400
//     },

//     plotOptions: {
//         bar: {
//             horizontal: false,
//             distributed: true,
//             borderRadius: 4,
//             backgroundColor:azure,
//             backgroundShadow:0.5
//         }
//     },
// sales = new()
// }
var barchartoptions = {
    series: [{
        data: [10, 20, 32, 40,50]
    }],
    chart: {
        type: 'bar',
        height: 400,
        toolbar: {
            show:false

        },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: false,
            distributed:true,
            columnWidth:'60%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend:
    {
        show:false,
    },
    colors:
    [
       "#2962ff", "#d50000", "#2e7d32", "#ff6d00", "#583cb3"
    ],

    xaxis: {
        categories: ["mobiles", "laptops", "airpods", "accessories","tablets"],
    },
    yaxis:
    {
        title:
        {
            text:"count",
        }
    }
};

var barchart = new ApexCharts(document.querySelector("#bar-chart"), barchartoptions);
barchart.render();

var salesOptions = {
    series: [{
    data: [300,450,350,500,700,850,1000,900]
  }],
    chart: {
    type: 'bar',
    height: 500
    
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
      toolbar:
      {
        show: false,
      }
    
    }
  },
  dataLabels: {
    enabled: false
  },
  
   xaxis:{

   categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],
   
 },
  yaxis:{
    title:
    {
        text:"Dollars(in K)"
    }
  },
  };

  var saleschart = new ApexCharts(document.querySelector("#saleschart"), salesOptions);
  saleschart.render();
 
  var inventoryOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 600,
    type: 'pie',
  },
  labels: ['Laptops','Mobiles','Accessories','Airpods','Neckband'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: 'false'
      }
    }
  }]
  };

  var inventorychart = new ApexCharts(document.querySelector("#inventorychart"), inventoryOptions);
  inventorychart.render();

  var customerOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
    width:600
  },
  labels:
   ["New","Existing","Frequent","VIP","Others"],
  responsive: [{
    breakpoint: 300,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var customerchart = new ApexCharts(document.querySelector("#customerchart"), customerOptions);
  customerchart.render();

