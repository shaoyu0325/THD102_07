$(function(){
    $.ajax({
        url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWB-A63B52FE-BF95-490D-962A-AF1856C0776C&format=JSON&locationName=%E6%96%B0%E8%8E%8A%E5%8D%80&elementName=T,Wx",
        type: "GET",
        dataType:"json",
        success:function(response){
            console.log(response.records)
            let path = response.records.locations[0].location[0]
            $('#city_name').html(response.records.locations[0].locationsName)
            $('#district').html(response.records.locations[0].location[0].locationName)
            $('#tempture').html(path.weatherElement[0].time[0].elementValue[0].value + "&#176;")

            let j = 0;
            for(let i = 0; i < 10 ; i++){
                if(i % 2 == 0){
                    let wx = path.weatherElement[1].time[i].elementValue[0].value;
                    // console.log(wx);
                    if(wx.indexOf('晴') > -1){
                        $('.block').eq(j).find('img').attr('src','https://i.imgur.com/Shrg84B.png');
                    }else if(wx.indexOf('雨') > -1){
                        $('.block').eq(j).find('img').attr('src','img/rain-black-cloud-with-raindrops-falling-down.png');
                    }else {
                        $('.block').eq(j).find('img').attr('src','https://i.imgur.com/BeWfUuG.png');
                    }
                    $('.sub_tempture').eq(j).html(path.weatherElement[0].time[i].elementValue[0].value + "&#176;")
                    j++;
                }
            }
        },  
        error: function(){
            console.log('error')
        }
    })
})