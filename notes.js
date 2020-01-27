/*

    What is it?

        React is a JS Library created and maintained by Facebook and is used for building UI 
        and front end apps

        it is often called a framework

        seems to be the most popular in the industry for now



    Why use it?

        makes front end JS much easier
        
        uses self contained independent components with their own state

        much more interactive UI

        virtual DOM

        JSX - incorporate JS in markup


    Thinking in components

        a basic example with todo list app would have the following components:

            global TodoApp component (which encapsulates all other components)

            search component (embeded in TodoApp component)

            TodoList component (embeded in TodoApp component)

            Todo (item component embeded in the TodoList component -all of them are here looped through and displayed)

            AddTodo component (embeded in TodoApp component)


    What is react state?

        Components can have state which is an object with values which decide how the component renders and behaves

            e.g. 

                state = {
                            title: "test-app",
                            body: "<body></body>",
                            isFeatured: true
                        }

        we can also have app lvl state (data to be shared between components) using the React's context 
        api or a state manager like Redux 
                *for a todolist app the todo items would be that data 'to be shared between components'



        What is create-react-app?

            a cli tool for creating React apps
            uses webpack but needs no prior config
            comes with a dev server and hot reloading
            "npm run build" will compile all the code to something that the browser can read (static assets) 
            and that we can deploy

        left at min 9:44 (starts code)

        video: https://www.youtube.com/watch?v=sBws8MSXN7A
*/