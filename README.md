# LiciMaticTest

- Instructions:
  - Server: (in __Server/__ directory)
    - __npm__ install
    - __npm__ install --only=dev (runnning on localhost)
    - You should change the fields __username__ and __password__ in the file *Server/config/config.json*.
    - __sequelize__ db:create && __sequelize__ db:migrate 
    - npm start
  - Client: (in __Client/__ directory)
    - __npm__ install
    - __npm__ start