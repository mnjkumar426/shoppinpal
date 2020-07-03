Requrement on Host machine
  Nodejs
  Docker
  Docker-compose 


Start Application
    sh start.sh


API  END POINT

C)reate a new Book
API URL :http://localhost:8080/book
METHOD : POST 
BODY : {
    author:"Manoj",
    "title" :"java",
    "isbn" :"1234567",
    "release_date": "10-01-2010"
}



(R)ead existing Books
API URL :http://localhost:8080/book
METHOD : GET 

(U)pdate an existing Book

API URL :http://localhost:8080/book/{_id}
METHOD : PUT 
BODY : {
    author:"Manoj",
    "title" :"java",
    "isbn" :"1234567",
    "release_date": "10-01-2010"
}

(D)elete an existing Book

API URL :http://localhost:8080/book/{_id}
METHOD : DELETE 

 
