document.write("<script language='javascript' src = '../js/jquery-3.5.1.min.js'></script>");
function GetEventList(){
    $.ajax({
        url:'../data/eventlist.html',
        type:'get',
        dataType:'json',
        success:function(data){   
        for(i in data.data)
        {
          var tr;
          tr='<span style="color: gray;">'+ data.data[i].FDate+ '</span> <a href="'+data.data[i].Url+'" target="_blank">'+data.data[i].Title+'</a><br/><br/>';
          $("#list").append(tr);
        }}
    })
}