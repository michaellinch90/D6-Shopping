# Welcome to D-6 Shopping

D-6 Shopping is the first page in a long book that I plan on creating throughout my career. Working heavily in my past with students with special needs I have seen a need to more online apps that simulate real life activities. Things that many of us see as easy or mundane tasks can prove to be very challenging for this population. That is why I have created D-6 Shopping. 

This app will be a part of "D-6 Living",  a larger program that will include many life skills such as banking, domestic and social skills. 

After a student has logged in or signed up they are able to use the different functions of the app. They can sort through items of a generic grocery store, choosing which they would like to add to cart. They then can verify the amounts and total price in the cart and checkout. After checkingout the student can review previous orders, start a new order or logout. 

This is a streamlined base shopping activity. It has the ability to be added onto for more advanced students going forward. 

#### [D-6 Shopping](https://d6-living.herokuapp.com/orders/new)

#### The Interface

Student has the ability to Login or Sign-Up 

![Login](/public/screenshots/login.png)

![Sign-Up](/public/screenshots/signup.png)

Once logged in the student can begin filling their shopping cart by viewing multiple categories

![View](/public/screenshots/NewOrderPage.png)

![NewCAt](/public/screenshots/NewCat.png)

The Student can Add Items to the Cart

![Add to Cart](/public/screenshots/addToCart.png)

The Student can change quantity and delet

![Update and Remove from cart](/public/screenshots/deleteFromCart.png)

The student will then be brought to the previous orders page

![Previous Orders](/public/screenshots/renderPreviousOrders.png)

The Student can view different previous orders

![Change Previous Order](/public/screenshots/changePreviousOrders.png)

The student can begin a new order

![View](/public/screenshots/NewOrderPage.png)

And the student can logout

![Login](/public/screenshots/login.png)

#### Technologies Used

- Full MERN Stack App
    - Mongoose
    - Express
    - React
    - Node.Js
- Heroku



#### Approach

- Created ERD, Wireframes and Trello board to map out the app.
    - [Trello](https://trello.com/b/PwIz5jj5/d-6-living)
    - [Whimsical](https://whimsical.com/d6-living-p4-TtZ5Xu7MZgsrhEpRLghUiY)
    - [ERD](https://lucid.app/lucidchart/58ebc09c-3685-44bf-91e2-29fa87ce1d66/edit?page=0_0&invitationId=inv_e8c4e4f0-b7f0-41d2-9b26-52b6582dbfc8#)
- Created Login, Sign-Up and Logout capabilities
    - User Schema and Model
    - User Controller
    - User Routes
    - User Api
- Repeated that process for Items and Orders
- Created Category Schema and Component to sort seed
- Created seed data
- Using order and items api populated data onto the NewOrderPage
- Created Cart and virtuals to allow data to be manipulated without affecting the database
    - This will become very useful when creating banking portions of the app
- Created full CRUD using the cart
    - add items
    - update the quantity of items
    - delete iteams
- Created checkout function
    - updated isPaid in item schema to true, placing them in the previous orders page
- Created PreviousOrders page with the updated data
- Addedd more css and completed the app

#### What went well...

- Debugging. I found myself getting more errors that I felt comfortable debugging. While there were still plenty that took time and effort to fix as an overall I felt much more capable. 
- Following proper paths. More so than in other express projects I understood more the paths to take to connect front end to back end and vice versa. 
- Time management. I had a clear plan when I started this project on what I wanted to accomplish and by when and I feel like I stayed very close to that schedule. 

#### Hurdles

- ITEAMS!!!!! Myself and others spent hours pouring over my code that seemed to all look correct. From Controllers to routes to API to Pages to Components and back...All to find that in one funtion I had typed iteams not items. Delete that 'a' and poof everything works. 
    - This was a major lesson in slowing down when debugging. I also find that I do too much coding without testing that it works, making it harder to fix. 
- Routes. I had some issues with my routes later in the project as there were more parts being added on. I plan on really diving in on this as it was an issue on my last express project. 

#### Ice Box

- Kroger API
- Connect to a Banking app
- Create Payment option




-[LinkdIn](https://www.linkedin.com/in/michael-linch/)




