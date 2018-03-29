$(function () {
  function getData() {
    var dataA = JSON.parse(responseA).data;
    var dataB = JSON.parse(responseB).data;

    updateData(dataA, dataB);
    setInterval(
      function() {updateData(dataA, dataB)},
      // 1000 * 60 * 10 // 10 minutes
      2000
    );
  }

  function updateData(dataA, dataB) {
    $('.energy-saved .amount').text(dataA.total_saving_power)
    $('.carbon-deduction .amount').text(dataA.total_reducing_co2);
    $('.trees-planted .amount').text(dataA.total_saving_trees);

    var row;
    var col;
    dataB.forEach(function(e, i) {
      row = $('tr.data-point-' + i);
      Object.keys(e).forEach(function(prop) {
        col = row.find('td.' + prop);
        col.text(e[prop]);
      });
    });

    updateTime();
  }

  function updateTime() {
    var now = new Date(Date.now());
    var time1 = now.getFullYear() + '/'
      + zeroPadding(now.getMonth() + 1) + '/'
      + now.getDate();
    var time2 = now.getHours() + ':'
      + zeroPadding(now.getMinutes()) + ':'
      + zeroPadding(now.getSeconds());
    $('h2.time1').text(time1);
    $('h2.time2').text(time2);
  }

  function zeroPadding(number) {
    if (number < 10) return '0' + number;
    return number;
  }

  getData();

  // var apiUrl = 'http://203.66.57.171/api_school.php?action=getTotalArea';
  // $.ajax({
  //   url: apiUrl,
  //   type: 'get',
  //   crossDomain: true,
  //   dataType: 'json',
  // })
  // .done(function(data) {
  //   var now = new Date(Date.now());
  //   var time1 = now.getFullYear());
  //   var time1 = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
  //   var time2 = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  //   $('h2.time1').text(time1);
  //   $('h2.time2').text(time2);
  // });

});

var responseA = JSON.stringify(
  { "data": {
      "total_saving_power": 751264,
      "total_reducing_co2": 391408.54,
      "total_saving_trees": 32304.35
  }}
);

var responseB = JSON.stringify(
  {"data": [
    {
      "time": "00:09",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:08",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:07",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:06",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:05",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:04",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:03",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:02",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:01",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:00",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    }
  ]}
);
