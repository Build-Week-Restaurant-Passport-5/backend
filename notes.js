/*

///////////////// Phase 1 ///////////////

Thought Dump.

What kind of tasks do I need to do?

----------------------------------

API   :
- Build API (RESTful w/EXPRESS) 
- Deploy API (RESTful w/EXPRESS) 

----------------------------------

Database :

- Data Persistence, data model

----------------------------------

Auth  :

- authentication service that prevents access to endpoints that should not be public.

----------------------------------

Testing  :

- automated unit tests for core business logic.







///////////////// Phase 2 ///////////////
1. yarn 

2. yarn add express

3. index.js
   + listen Linda

4. server.js

5. run node index.js
   + http://localhost:4000
   + listen Linda ✅

6. Jason? 
   + npm init -y
   + scripts
      + server
      + start
   + listen Linda ✅ 

7. CREATED , dir : food 
      + food/food-routes.js
         + added api boilerplate
      + updated server.js with routes
   
8.
- Food Router 
- Food Model
(do everything I know regarding these)

- data > dbConfig.js

- food-model.js
- food-routes.js

- Stopping to design the design schema for my thought process


DB schema: 
https://www.figma.com/file/SgBV7eLTJ6pU38zmOxEyes/restaurant_passport?node-id=0%3A1

DB tables:
https://docs.google.com/document/d/1gWqM-vuZZ0Rx_6iSUWxVMsiOQYoSRnnpuDd4qtgvn_4/edit?usp=sharing

alright planning done.







///////////////// Phase 3 ///////////////

Database Schema 

- npm install -g knex
- npm install knex sqlite3
- knex init
   + modified knexfile.js
   + verified data in > dbConfig.js
- knex migrate:make create-food
   + create the tables
   + confirmed tables show in SQLite Studio
- Seeds
   + knex seed:make 001-food
   + sample data shows in SQLite Studio

...So when API is setup, I can test that user can see its restaurants, so I'll have to go back in and add a foreign key to the migration.

...For now we know the database is setup, dummy data showing in sqlite.




/--------------------------/
Side Notes:
/--------------------------/

- MOVED server.js to api dir


*/