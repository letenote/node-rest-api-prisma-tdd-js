# node-rest-api-prisma-tdd-js
simple rest api nodejs - express with orm prisma and tdd with jest

### babel installatiion
- npm install --save-dev babel-jest @babel/preset-env
- https://babeljs.io/setup#installation

### config
- create sql database
- npx prisma init

### create DB Model
- definition db schema in prisma/schema.prisma, ex:
```
model User {
  id        Int     @id @default(autoincrement())
  ...

  @@map("users")
}
```
- npx prisma migrate dev --create-only
- then create migration name, ex 'create_table_users'
- npx prisma migrate dev

### config all error in prisma to winston logger
read: https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/logging
