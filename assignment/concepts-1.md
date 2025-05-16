HTTP methods:
HTTP methods are different types of requests a client may send to the server. They allow the backend to determine what type of response the clients are looking for.

1. GET
   GET is used to fetch data from a source. Example: /users fetches the list of user data.

2. POST
   POST is used to post or send new information to a specified source. POST: /users can contain a body consisting of mandatory information.

3. PUT
   PUT is used to update a specified information on the server. PUT: /user can contain a body with the information of the user to be updated.

4. DELETE
   DELETE method is used to remove existing data from a provided service. DELETE: /user may contain additional /$user_id to specify the user data to remove or may contain a body that can accept numerous user ids.

HTTP Status codes:
HTTP Status codes are employed when the server returns numerical values to the client.

1. 2xx: Success
   These status codes are used when the request was successful and server is responding well.

2. 4xx: Client Error
   These codes are used where there was some error in the client side.
   For example:
   400 is where validation was failed
   401 is where request is unauthorized
   404 shows that data requested is not available

3. 5xx: Server Error
   These codes indicate where the error is on the server side.
   500 code simply specifies a generic server error
   503 shows that server is temporarily unavailable

CSS selectors:
These are used to assign styling to the targeted tags.

1. Universal selector (_): Applies to all elements:
   _{
   margin: 0;
   padding: 0;
   }

2. Type selector: Applies to all the elements of a specified type.
   p{
   color: blue;
   }

3. Class selector: Applies to all the elements of a specified class.
   .operator-button{
   background-color: red;
   }

4. ID selector: Applies to the element with a specified id.
   #scaffold{
   font-size: 2em;
   }

Git Basics:

1. init: This is a command issued during the first launch of the project. This is achieved because the command initializes a hidden file .git that supports tracking changes.
   git init

2. add: This is a command used to add changed files and folders. git add. adds all files which have changed or giving file names will only add given files.
   git add fileName

3. commit: This command commits a permanent snapshot with a message. It informs Git what changed and when.
   git commmit -m "commit message"

4. push: This command pushes the local commit to a remote repository. It sends the changes to the git repository.
   git push

5. pull: This command is used to fetch changes from the the git repository.
   git pull origin branch-name

6. clone: This command is used when making a copy of an existing repository.
   git clone repository-url

7. branch: Git branches are the copies of a project on which various people can work separately without colliding with one another. git branch initiates a new branch.
   git branch branch-name

Callback Function:
A callback function is a function passed as an argument to a function.

Higher Order Function:
A higher order function is a function that accepts another function as an argument or returns a function.

Array Methods:

1. filter(): Returns a new array that satisfy some criteria.
2. map(): Goes through each element in the array, does something to the element and returns a new array.
3. forEach(): Calls a function for each item and does not return a new array
4. push(): Adds a new element at the end of an array.
5. pop(): Removes the last element of an array and returns it.
