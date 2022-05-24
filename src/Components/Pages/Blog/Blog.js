import React from 'react';
import performance from "../../../assets/img/react_app_performance.jpg"
import state from "../../../assets/img/state.png"
const Blog = () => {
    return (
        <div><h1 className='text-2xl ps-10'>1. How will you improve the performance of a React Application?</h1>

    
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
  <h1 className='text-2xl ps-10'>2.  What are the different ways to manage a state in a React application?</h1>

    
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
</div>

    );
};

export default Blog;