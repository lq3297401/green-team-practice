$(function () {
  var response = '{"data":{"total_saving_power":751264,"total_reducing_co2":391408.54,"total_saving_trees":32304.35}}';
  var modbus = JSON.stringify({"data": [
    {
      "time": "00:00",
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
      "time": "00:02",
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
      "time": "00:04",
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
      "time": "00:06",
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
      "time": "00:08",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    },
    {
      "time": "00:09",
      "t1": "19",
      "t2": "20",
      "hvacKwh": "11.1",
      "hvacWatts": "11.1",
      "lightKwh": "11.1",
      "lightWatts": "11.1"
    }
  ]});

  function updateData(responseData, modbusData) {
    var dataA = JSON.parse(responseData).data;
    $('.energy-saved .amount').text(dataA.total_saving_power)
    $('.carbon-deduction .amount').text(dataA.total_reducing_co2);
    $('.trees-planted .amount').text(dataA.total_saving_trees);

    var dataB = JSON.parse(modbusData).data;
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

  updateData(response, modbus); // mock api call

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

  // var $table = $('#table');

});
