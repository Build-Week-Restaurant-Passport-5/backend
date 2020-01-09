# Restaurant Passport 
## A home for all your foodie aspirations.



### Navigation: 
- [Auth Routes](https://github.com/Build-Week-Restaurant-Passport-5/backend#auth-routes "Auth Routes")
    - [Register](https://github.com/Build-Week-Restaurant-Passport-5/backend#register "Register")
    - [Login](https://github.com/Build-Week-Restaurant-Passport-5/backend#login "Login")



- [Authenticated User](https://github.com/Build-Week-Restaurant-Passport-5/backend#authenticated-user "Authenticated User")
- [Status Codes](https://github.com/Build-Week-Restaurant-Passport-5/backend#status-codes "Status Codes")
- [Content Info](https://github.com/Build-Week-Restaurant-Passport-5/backend#content "Content Info")




<br />

# API Documentation

<br />

## Auth Routes

|   Table   |   Method  |  Endpoint | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   **users_table**   |   *POST*   |    **/api/auth/register**    |   Registers a new user.   |
|   **users_table**   |   *POST*  |   **/api/auth/login**    |   Logs in already registered user.   | 



<br /><br />

## Register
### Request Body

|   Name   |   Type  |  Required | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   `username`   |   String  |   **Yes**    |   Must be Unique.   | 
|   `password`   |   String  |   **Yes**    |             | 
|   `name`   |   String  |   **Yes**    |             | 
|   `city`   |   String  |   **Yes**    |             | 
|   `email`   |   String  |   **Yes**    |             | 


<br />

**Example:**
```
    {
         username: "love2eat19",
         password: "json245",
         name: "Ipsum",
         city: "Lorem",
         email: "lorem@ipsum.org"
        }
```

<br /><br />


## Login
### Request Body

|   Name   |   Type  |  Required | 
|   -----   |   ------  |   ------  |   
|   `username`   |   String  |   **Yes**    |   
|   `password`   |   String  |   **Yes**    |             


<br /><br />

**Example:**
```
    {
         username: "love2eat19",
         password: "json245"
        }
```



<hr />
<br /><br />

## Authenticated User

|   Table   |   Method  |  Endpoint | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   **restaurants_table**   |   *GET*   |    **/api/restaurants**    |   Gets list of restaurants   |
|   **restaurants_table**   |   *GET*   |    **/api/restaurants/:id**    |   Restaurant by ID.  |
|   **restaurants_table**   |   *POST*   |    **/api/restaurants/:id**    |   Create a new entry for the specific user that is logged in. *(i.e. for an id of 2, would post to user 2)* |
|   **restaurants_table**   |   *PUT*   |    **/api/restaurants/:id**    |  Edit an existing entry |
|   **restaurants_table**   |   *DELETE*   |    **/api/restaurants/:id**    |  Delete an entry |


<br /><br />



### Request Body

|   Name   |   Type  |  Required | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   `restaurantName`   |   *String*  |   **Yes**    |      | 
|   `streetAddress`   |   *String*  |   **No**    |      | 
|   `city`   |   *String*  |   **No**    |      | 
|   `zipcode`   |   *String*  |   **No**    |      | 
|   `phoneNumber`   |   *String*  |   **No**    |      | 
|   `websiteURL`   |   *String*  |   **No**    |      | 
|   `myRating`   |   *Integer*  |   **No**    |   1-5   | 
|   `notes`   |   *String*  |   **No**    |      | 
|   `stamped`   |   *Boolean*  |   **Yes**    |   Default: `false`   | 


<br /><br />

**Example:**

```
       {
        restaurantName: "Pappadeaux",
        streetAddress: "34455 N Black Canyon Hwy",
        city: "Tuscon",
        zipcode: "00000",
        phoneNumber: "(000) 111-0000",
        websiteURL: "http://yumyumyum.com",
        myRating: "5",
        notes: "Good food.",
        stamped: true,
       }
```

<hr />
<br /><br />

# Status Codes



|   Status   |   Meaning  |  Description | 
|   -----   |   ------  |   ------  |   
|   `200`   |   **OK**   |   request has succeeded   |
|   `201`   |   **Created**   |   The request has been fulfilled and has resulted in one or more new resources being created.  |
|   `401`   |   **Unauthorized**   |   the page you were trying to access cannot be loaded until you first log in with a valid user ID and password.   |
|   `500`   |    **Internal Server Error**   |  something has gone wrong on the web site's server   |




<hr />
<br /><br />


# Content

- **Content-Type:** `application/JSON` 

- **Authorization:** `JSON Web Token`











