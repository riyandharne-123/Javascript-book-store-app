//showing books
function ShowBooks(){
    $("#books").show();
}
//displaying data


var app = angular.module('myApp', []);
app.controller('BooksCtrl', function($scope) {

    var bookname = [
        {
            "name":"learn java",
            "id":"1",
            "author":"author name"
          },
          {
              "name":"learn c++",
              "id":"2",
              "author":"author name"
            }
    ];
  $scope.AddBook=function(){
        //adding books
        var book_name=document.getElementById('book-name').value;
            var book_id=document.getElementById("book-id").value;
            var author_name=document.getElementById('author-name').value;
         var updated_books={
             
                 "name":book_name,
                 "id":book_id,
                 "author":author_name
             
    }
         //adding new book json object
         if(book_name==""){
             alert('please book name');
         } else{
         bookname.push(updated_books);
         }
        }
 $scope.bookname=bookname;

 //deleting books
 $scope.delete = function (x) {            
    var index = $scope.bookname.indexOf(x);
    $scope.bookname.splice(index,1);               
};
});

