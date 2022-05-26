import React from 'react';
import performance from "../../../assets/img/react_app_performance.jpg"
import state from "../../../assets/img/state.png"
import prototype from "../../../assets/img/OyVPW.png"
const Blog = () => {
    return (
        <div>
            <h1 className='text-bold text-2xl text-secondary my-2'>1. How will you improve the performance of a React Application?</h1>

    
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
  <img src={performance} alt="" class="max-w-sm w-full ps-10 rounded-lg shadow-2xl"  />
    <div>
    <ol>
        <li>1.Use Function Components and React.PureComponent</li>
        <li>2.When the react application is built use webpack to compreses all modules into one file that optimize server</li>
        <li>3.Try to Using Immutable Data Structures</li>
        <li>4. Set Dependency Properly</li>
        <li>5.Use key when using Map.it will help the virtual DOM</li>
    </ol>
    </div>
  </div>
  <h1 className='text-bold text-2xl text-secondary my-2'>2.  What are the different ways to manage a state in a React application?</h1>

    
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
  <img src={state} alt="" class="max-w-sm w-full ps-10 rounded-lg shadow-2xl"  />
    <div>
    <ol>
        <h4 className='text-xl text-primary'>The Four Kinds of React State to Manage</h4>
        <li><span className='text-2xl'>1.Local state</span>
            <p>Local state is data we manage in one or another component.Local state is most often managed in React using the <span className='text-red-700 text-2xl'>useState</span> hook.</p>
        </li>
        <li><span className='text-2xl'>2.Global state</span>
            <p>Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least</p>
        </li>
        <li><span className='text-2xl'>3.Server state</span>
            <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.React Query has become the go-to solution for <span className='text-red-700 text-2xl'>Server state</span> management in React apps, and for good reason! This smart, comprehensive solution makes it easy to keep your app up-to-date with data on the server.</p>
        </li>
        <li><span className='text-2xl'>1.Global state</span>
            <p>Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least</p>
        </li>
        
    </ol>
    </div>
  </div>
  <h1 className='text-bold text-2xl text-secondary my-2'>3.How does prototypical inheritance work?</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
  <img src={prototype} alt="" class="max-w-sm w-full ps-10 rounded-lg shadow-2xl"  />
    <div>
    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
    </div>
  </div>
  <h1 className='text-bold text-2xl text-secondary my-2'>4.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
  
    <div>
    <p>Of course, not always I have access to the $product id and name  so i am  also required to understand the case scenario and see if i can get that $product object in another way.

For example, I know the $product_id as well as $product.name. In this case, i have to find a way to get the $product object from $product.name, And Then i can found the product </p>
    </div>
  </div>
  <h1 className='text-bold text-2xl text-secondary my-2'>5. What is a unit test? Why should write unit tests?</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
  
    <div>
      <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently, Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended.</p>
    </div>
  </div>
</div>

    );
};

export default Blog;