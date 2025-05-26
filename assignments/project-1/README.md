## Backend Initialization

- Inside the folder project-1

  ```bash
      npm install express prisma @prisma/client
  ```

- Create the GET / route

  ```js
  app.get("/", (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Initialized Successfully",
    });
  });
  ```

- Run the server file (server.js)

  ```bash
      node server.js
  ```

- Make server listen to some port (like 3000)

  ```js
  app.get("/", (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Initialized Successfully",
    });
  });
  ```

## Database and ORM Initialization

- Initialize prisma

  ```bash
      npx prisma init
  ```

  After this command, prisma directory is created inside it, schema.prisma file exists.
  We define model (table) in schema.prisma

- Check if database Mongodb is on PC

  Follow the internet to complete this installation and verification process

-
