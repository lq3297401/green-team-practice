$(function () {
    var response = '{"data":{"total_saving_power":751264,"total_reducing_co2":391408.54,"total_saving_trees":32304.35}}';

    function updateData(response) {
        var data = JSON.parse(response).data;
        $('.energy-saved .amount').text(data.total_saving_power)
        $('.carbon-deduction .amount').text(data.total_reducing_co2);
        $('.trees-planted .amount').text(data.total_saving_trees);

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

    updateData(response); // mock api call

    // var apiUrl = 'http://203.66.57.171/api_school.php?action=getTotalArea';
    // $.ajax({
    //   url: apiUrl,
    //   type: 'get',
    //   crossDomain: true,
    //   dataType: 'json',
    // })
    // .done(function(data) {
    //   var now = new Date(Date.now());
    //   var time1 = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
    //   var time2 = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    //   $('h2.time1').text(time1);
    //   $('h2.time2').text(time2);
    // });

    // var $table = $('#table');

});
