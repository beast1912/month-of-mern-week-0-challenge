function search()
{
    query = document.getElementById("search").value;
    url ='http://google.com/images?q=' + query;
    window.open(url,"_self");
}