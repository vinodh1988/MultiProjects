$(document).ready(
    function(){
       $('#search').keyup(
           function(){
               path='dataservice/search/'+$('#search').val();
            $.get(path, function(data, status){
                var content="";
                for( x in data){
                    content+="<li>"+data[x].name+"</li>";
                }
                $('#fillit').html(content);
            });           
           }
       );
    }
);