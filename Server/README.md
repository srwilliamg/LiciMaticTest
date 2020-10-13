# LiciMaticTest
This is a repository for a Nodejs application with Sequelize as ORM connected to a mysql DB

- How to run? execute the next commands:
  1. __npm__ install
  2. __npm__ install --only=dev
  3. You should change the fields __username__ and __password__ in the file *config/config.json*.
  4. __sequelize__ db:create && __sequelize__ db:migrate
  5. npm start