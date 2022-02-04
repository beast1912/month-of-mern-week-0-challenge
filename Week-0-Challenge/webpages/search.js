function search()
{
    query = document.getElementById("search").value;
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_self');
}