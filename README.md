## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Explanation for MVC

```bash
Constroller:
1. handle request flow
2. never handles data logic

Model:
1. Handles data logic
2. interacts with database

View:
1. Handles data presentation for user
```

## Flow http://localhost:3000/

```bash
1. run npm start, app will start at http://localhost:3000/
2. when you open http://localhost:3000/, "hello.controller.ts" will send
the request to "hello.service.ts"
3. "hello.service.ts" will send this object
        {
          message: 'Hello world!',
          name: 'Hansel',
        };
    to "hello.controller.ts"
4. "hello.controller.ts" will send this object to "home.hbs" and this controller will render "home.hbs"
```

## Flow http://localhost:3000/todo

```bash
1. run npm start, app will start at http://localhost:3000/
2. when you open http://localhost:3000/, "todo.controller.ts" will send
the request to "todo.service.ts"
3. "todo.service.ts" will send this object
      [
        { task: 'Create app', isComplete: false },
        { task: 'Upload Video', isComplete: true },
      ];
    to "todo.controller.ts"
4. "todo.controller.ts" will send this object to "todo.hbs" and this controller will render "todo.hbs"
```