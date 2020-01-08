# Restaurant Passport 
A home for all your foodie aspirations.

<br /><br />

# API Documentation

## Authorization Routes

|   Table   |   Method  |  Endpoint | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   **users_table**   |   POST  |   **/auth/login**    |   Registers a new user.   | 
|   **users_table**   |   POST   |    **/auth/register**    |   Logs in already registered user.   |


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

|   Name   |   Type  |  Required | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   `username`   |   String  |   **Yes**    |   Must be Unique.   | 
|   `password`   |   String  |   **Yes**    |             | 


**Example:**
```
    {
         username: "love2eat19",
         password: "json245",
        }
```


<br /><br />



## Restaurant Routes

|   Table   |   Method  |  Endpoint | Description   |
|   -----   |   ------  |   ------  |   ------- |
|   **users_table**   |   POST  |   **/auth/login**    |   Registers a new user.   | 
|   **users_table**   |   POST   |    **/auth/register**    |   Logs in already registered user.   |


<br /><br />


