# Sem3 CA3-Documentation


## Password Hashing:
This CA has a security part; Password Hashing. When we put users down in the database, we don't want to their passwords in plaintext. If our web app gets hacked and all our users password are leaked, our users are in big trouble, because our website is propably not place they use this password. Here password hashing with salt is a solution. With password hashing we encrypt the password using a hashing algorithm. To add some extra security we also adds some "salt" - a secret word, so hackers are not able to crack our hashed password with a simple dictionary. So now we have the hashed passwords stored in the database, with some salt added. When the user is writing a password to log in, this password is also hashed with salt and compared to the stored password.
            
## Backend:
For this CA we were given a seed with some startcode to edit. We have created our own Facades, Database and a rest service for our CRUD operations. The rest backend should work properly but the only thing operations we have managed to implement is get Books and Add Book.
## React:
The react part was the most difficult. We ran into so many issues all the time, the issues was mostly not the structure of how to use react and mobx, but the javascript and how to use the different tools javascript has. In the last 2 days we were stuck with the fetch part on the front-end. We had a problem that we called getData(). when we got into Products.js. Our thinking of that was right because when we wanted to click the Link to Details.js we have called getData();. But when we was in Details.js and pushed F5 we didn't call getData(). so we tried many hours to debug something that worked.
We have learned a lot about using the developer tool in chrome, because it’s the only way to debug through the front-end, but we have not used enough time and learned the features of the developer tool before this CA.
Participation and opinions:
In this project Thomas Staal and Christian Øst-Jacobsen attended everyday of the week. 
Mads attended the first day and worked from home on the assigned parts. 

Christian and Thomas have made on every point in this CA, we have been pair programming when there were issues. So basically we have been in every corner of the code. We learned best this way

## Christian has participated in: 
- Rest Service.
- CRUD operations in the frontend and optimized the facade classes.
- Designed the navbar, added dummy text and added restrictions to some of the tabs.
- React development. 

## Thomas has participated in:
- REST Service
- Facade
- CRUD operations
- React
## Mads has participated in: 
- REST Service
- Facade
- CRUD operations


## Conclusion:
This has been at tough project even though it was a Light version. For us, it's been more like a learning process and not a CA. We have ended up with an incomplete solution. You can navigate around on the and the userRoles are added to the different taps on the website, so the only role who is able see and use the "add books" tap is the user role. Same with the Admin role, who is the only kind of user who is able to see the "edit user" tap. (incomplete feature)
The only feature we succeeded with was the "add user" feature. It works down through all the different layers of the front-end and backend.
            
## Feedback:

### Thomas:
This CA has for me not been a project that should be made but a learning process in react and javascript. It has been the week where i have worked the hardest but learned the most.
But i has been tough because there was so many loss ends. I would have liked to know a lot more about javascript, and i suggest before having the react week, we should have a whole week with javascript, and how to use the methods we need to use in React. So that we can see the divide javascript, mobx, react from each other.
I would have also been nice if we knew more about the developer tool in chrome, since we need to test the front-end through the developer tools. We were introduced to the developer tool. but there was so much during this week so we didn't focus on how much the developer tool can help us.

### Christian: 
This module has not been perfect but it has been valuable anyway. I think it is good for us to be thrown out on deep water sometimes - i’m sure it won’t be the last time. It would have been nice to have more knowledge on the Plain-JS part, but while learning react we have been learning a lot of javascript too. Next semester i recommend that you give the students more time to learn JS before the js module. It would also be nice to be introduced to jquery - one day should be enough to walk through the functionallity, and it would make live life alot easier when writing javascript. But at the end of the day, i think this module has been a success and i’m sure it will get even better next semester.

### Mads:
I've had a really hard time getting around how to use REACT. While the weekly tasks were somewhat comprehensible it was still quite a task to even get my head around the CA3. 
A way i could see improvoment in this course would be as it was done the previous year with Angular. Where we had a couple of links to guides on for example Code School. This was given the friday before the start of the course. And it gave the students an opportunity to actually have a good starting point on how it works. While my javascript is mediocre, i'd suggest giving way more space to javascript before this course. I know for myself
i have been doing a lot of javascript guides because i simply didn't feel strong enough in Javascript these last 3 weeks. 

