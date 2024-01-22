# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Similarities

1. Both are Object-Oriented Programming languages. 
2. Both are dynamically typed, meaning they allow variables to change types during runtime. 
3. Both have supportive active communities and third-party libraries and frameworks for developers to use. 

Differences

1. The syntax is different. JavaScript syntax follows curly braces and semicolons. Ruby is more flexable and expressive as Ruby is known for its readability. 
2. JavaScript uses a prototype-based inheritance model where objects can inherit directly from other objects. Ruby uses a class-based inheritance model where classes are defined and objects are instances of those classes. 
3. The default values are different. In JavaScript, if you attempt to access a variable that has not been declared you will recieve and error message. However, in Ruby, you can reference variables that have not been declared and it will assign a "nil" value. 

Researched answer: 1. Both JavaScript and Ruby follow the principles of Object-Oriented Programming. They support concepts such as inheritance, polymorphism, and encapsulation which allows developers to organize code into reusable and structured components. 2. Both JavaScript and Ruby are dynamically typed, meaning variable types are determined during runtime rather than at compile-time allowing for more flexibility and expressive coding experiences. 3. Javascript and Ruby both use automatic garbage collection in order to manage memory. Memory that is no longer in use is automatically identified and free'd-up by the language's runtime system eliminating the need for developers to manually delete memory. 

The differences are: 1. The syntax is different. JavaScript syntax is influenced by Java with C-stle syntax that includes curly braces and semicolons. Ruby has a more flexible and expressive syntax known for its readability and conciseness. It uses key words like 'do' and 'end' for blocks instead of curly braces. 2. The default values and arguments are different. Javascript throws an error if you try to acess a variablethat has not been declared and lacks built in support for default values in function parameters. Ruby allows you to reference variables that have not been declared by assigning them a value of 'nil' and also supports default values for function parameters. 3. The execution environment is different. JavaScript is primarily used as a client-side scripting language for web development. It runs in web browsers to enhance interactivity of web pages. It can also be used on the server side with running Node.js. Ruby is often used on the server side for web development. It can be used for scripting but it is less common in the client-side scripting compared to JavaScript. 

2. What does it mean to implement a TDD workflow?

Your answer: Test-Driven Development (TDD) is a workflow in which tests are written before actual code is implemented. TDD helps catch bugs early and provides a safety net for future changes. 

Researched answer: Test-Driven Development (TDD), is a software development approach where tests are written before the actual code is implemented. The TDD workflow typically follows the steps: Write a test, run the test, write the code, run all tests, refactor code, repeat. TDD encourages modular and maintainable code, provides a fallback for future changes and helps catch bugs early on. 

3. What is a block in Ruby?

Your answer: A block is a piece of code that can be passed to a method. Blocks are fundamental to many aspects of Ruby programming as they provide a flexable way to customize the behavior of methods. 

Researched answer: A block is a chunk of code that you can pass to a method. It allows the user to define a specific set of instructions that will be executed within the context of that method. Blocks are enclosed by either 'do...end' or curly braces '{...}' 

4. STRETCH: What is a version manager?

Answer: A version manager is a tool or software that helps manage and switch between different versions of programming languages, libraries, or frameworks on a computer, allowing developers to easily switch between different versions of software components in order to ensure compatability with their projects, avoiding conflicts with different dependancies and version requirements. 

## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. Database migrations: Database migrations are a way to manage changes to a database schema over time. They allow developers to update, version, and modify the structure of the database without losing the existing data. They are especially important as applications evolve and require adaptations to new requirements. 

2. Model validations: Validations are used to ensure that only clean and valid data gets saved into the database. Rails runs all model validations before content is added to the database. If the validations produce any errors the content will not be saved. 

3. Params: Parameters, params for short, are extra pieces of info that are passed in the URL. Parameter data can then be used by the controller which dynamically modify the view. 
