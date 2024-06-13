import React from "react";
import proto from "../../assets/images/proto.png";

const Blogs = () => {
  return (
    <div className="px-10 py-10 min-h-screen">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-3xl font-medium">
          <h2>
            1. What are the different ways to manage a state in a React
            application?
          </h2>
        </div>
        <div className="collapse-content">
          <p>
            React offers several mechanisms for state management, each suited to
            different scenarios and complexity levels. From simple local state
            management with the useState hook in function components to global
            state management solutions like React Redux, developers have various
            tools.
          </p>
          <p>
            In this blog, we'll explore how to manage state, ensuring that our
            React applications are efficient and easy to maintain.
          </p>
          <h5 className="text-xl font-bold">State in Functional Components</h5>
          <p>
            React functional components have become increasingly popular due to
            their simplicity and the introduction of hooks, which allow for
            state and other React features without writing a class. Managing
            state in a functional component is straightforward with the useState
            hook, which lets you add React state to function components.
          </p>
          <h5 className="text-xl font-bold">
            Passing State Between Components
          </h5>
          <p>
            One of the fundamental concepts in React is the unidirectional data
            flow, which means that state is often passed from parent components
            down to child components via props. This pattern is key to
            understanding how data flows through a React application. This is
            the most common way to share data between components in React.
          </p>
          <h5 className="text-xl font-bold">Lifting State Up</h5>
          <p>
            When multiple components need to access and modify the same state,
            it often makes more sense to "lift the state up" to their closest
            common ancestor. This pattern involves moving the state to a parent
            component and passing it down to the child components that need it,
            along with functions to modify it.
          </p>
          <h5 className="text-xl font-bold">
            Using Context API for State Management
          </h5>
          <p>
            For scenarios where you need to manage state between components that
            are not directly connected, React Context can be a powerful tool. It
            allows you to share state across the entire component tree without
            manually passing props down at every level.
          </p>
          <p>To use React Context for state management, you would:</p>
          <ol className="ml-7" style={{ listStyleType: "decimal" }}>
            <li>Create a Context object.</li>
            <li>
              Provide a Context value at a high level in your component tree.
            </li>
            <li>Consume the Context value in any component that needs it.</li>
          </ol>
          <p>
            This is particularly useful for managing global preferences, themes,
            or user authentication status.
          </p>
          <h5 className="text-xl font-bold">
            Advanced State Management with useReducer Hook
          </h5>
          <p>
            The useReducer hook is an alternative to useState that is preferable
            for managing complex state logic. It lets you define a reducer
            function that determines how the state should change in response to
            actions.
          </p>
          <p>
            The useReducer hook provides a dispatch function that you can use to
            send actions to the reducer, making it a powerful tool for more
            complex state management scenarios.
          </p>
          <h5 className="text-xl font-bold">
            Global State Management with React Redux
          </h5>
          <p>
            React Redux is a popular library for managing global state in
            large-scale React applications. It provides a centralized store for
            all the state in your application and a robust pattern to update
            that state through actions and reducers.
          </p>
          <p>To integrate React Redux into your application, you typically:</p>
          <ol className="ml-7" style={{ listStyleType: "decimal" }}>
            <li>
              Create a Redux store that holds the complete state tree of your
              app.
            </li>
            <li>Define actions that describe the changes in the state.</li>
            <li>
              Create reducer functions that specify how the state updates in
              response to actions.
            </li>
          </ol>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-3xl font-medium">
          <h2>2. How does prototypical inheritance work?</h2>
        </div>
        <div className="collapse-content">
          <p>
            Prototype inheritance in javascript is the linking of prototypes of
            a parent object to a child object to share and utilize the
            properties of a parent class using a child class.
          </p>
          <p>
            Prototypes are hidden objects that are used to share the properties
            and methods of a parent class with child classes.
          </p>
          <h5 className="text-xl font-bold">Syntax</h5>
          <p>
            The syntax used for prototype inheritance has the proto property
            which is used to access the prototype of the child. The syntax to
            perform a prototype inheritance is as follows :
          </p>
          <code>child.__proto__ = parent;</code>
          <h5 className="text-xl font-bold">Example</h5>
          <img src={proto} alt="code example" />
          <p>
            In this example, parent is the parent object acting as the
            prototype, and child is the child object that inherits from the
            parent prototype using the __proto__ property. This allows the child
            object to access the greet method defined in the parent object
            directly.
          </p>
          <p>
            While the __proto__ property can be used to perform prototype
            inheritance, it's important to note that directly manipulating
            __proto__ is not recommended in production code. Instead, the
            Object.create method or constructor functions with prototype are
            typically used for setting up prototype chains in a safer and more
            maintainable way.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-3xl font-medium">
          3. What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually
            scrutinized for proper operation. Software developers and sometimes
            QA staff complete unit tests during the development process.{" "}
          </p>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended.
          </p>
          <p>
            Unit testing is an important step in the development process. If
            done correctly, unit tests can detect early flaws in code which may
            be more difficult to find in later testing stages.
          </p>
          <p>
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
            Unit tests are typically isolated to ensure a unit does not rely on
            any external code or functions. Teams should perform unit tests
            frequently, either manually or more often automated.
          </p>
          <h5 className="text-xl font-bold">Unit testing advantages</h5>
          <p>
            There are many advantages to unit testing, including the following:
          </p>
          <ol className="ml-7" style={{ listStyleType: "decimal" }}>
            <li>
              The earlier a problem is identified, the fewer compound errors
              occur.
            </li>
            <li>
              Fixing problems early is usually cheaper than fixing them later in
              development.
            </li>
            <li>Easier debugging processes.</li>
            <li>Developers can quickly make changes to the codebase.</li>
            <li>Developers can reuse code and migrate it to new projects.</li>
          </ol>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-3xl font-medium">
          <h2>4. React vs. Angular vs. Vue?</h2>
        </div>
        <div className="collapse-content">
          <h5 className="text-xl font-bold">React:</h5>
          <p>
            React is the JavaScript library of User Interfaces. It is build
            single-page applications and also allows you to create reusable UI
            components. It is a front-end JavaScript framework, created by
            Facebook in 2011. The initial version (V0.3.0) was released in July
            2013. The latest version is V5.0.1. It has a size of 31.8K
          </p>
          <h5 className="text-xl font-bold">Angular:</h5>
          <p>
            Angular, developed by Google, was released in the year 2010. It is a
            TypeScript-based framework that uses a regular DOM. Angular provides
            a set of tools using which a complex, reactive UI can be built. It
            is primarily aimed at creating SPAs (Single Page Applications) and
            performs various operations such as routing, state management, PWA,
            testing, and building, having a size of 143K.
          </p>
          <h5 className="text-xl font-bold">Vue:</h5>
          <p>
            Vue was developed by a former Google employee and was released in
            the year 2014. It was developed to make the best version of Angular
            and make a custom tool. It is used for developing single-page
            engaging and high-quality web applications. It lets you extend
            directives (HTML with HTML attributes), and also provides built-in
            directives and user-defined directives. It is the lightest framework
            having a size of 23K.
          </p>
          <h5 className="text-xl font-bold">
            React VS Angular VS Vue: Difference Table
          </h5>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-xl">
                  <th>Feature</th>
                  <th>React</th>
                  <th>Angular</th>
                  <th>Vue</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Type</th>
                  <td>Library</td>
                  <td>Framework</td>
                  <td>Framework</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Initial Release</th>
                  <td>2011</td>
                  <td>2010</td>
                  <td>2014</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Developer</th>
                  <td>Facebook</td>
                  <td>Google</td>
                  <td>Evan You</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>Language</th>
                  <td>JavaScript</td>
                  <td>TypeScript</td>
                  <td>JavaScript</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>Architecture</th>
                  <td>Component-based</td>
                  <td>MVC</td>
                  <td>MVVM</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <th>Rendering</th>
                  <td>Virtual DOM</td>
                  <td>Regular DOM</td>
                  <td>Virtual DOM</td>
                </tr>
                {/* row 7 */}
                <tr>
                  <th>Performance</th>
                  <td>Fast</td>
                  <td>Good</td>
                  <td>Good</td>
                </tr>
                {/* row 8 */}
                <tr>
                  <th>Data Binding</th>
                  <td>One-way</td>
                  <td>Two-way</td>
                  <td>One-way</td>
                </tr>
                {/* row 9 */}
                <tr>
                  <th>Mobile Support</th>
                  <td>React Native</td>
                  <td>Ionic</td>
                  <td>Weex</td>
                </tr>
                {/* row 10 */}
                <tr>
                  <th>Size</th>
                  <td>31.8KB (core)</td>
                  <td>143KB (core)</td>
                  <td>23KB (core)</td>
                </tr>
                {/* row 11 */}
                <tr>
                  <th>Tooling</th>
                  <td>React Dev Tools</td>
                  <td>Angular CLI</td>
                  <td>Vue Devtools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
