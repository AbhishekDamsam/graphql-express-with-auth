* Register new user
mutation {
  registerUser(username: "user1", password: "pwd"){
    userId
    username
  }
}

* Login User
mutation {
  loginUser(username: "user1", password: "pwd"){
    userId
    username
    token
  }
}

* Pass the token in all graphql queries and in other mutation http headers (Bottom left in the playground for testing)
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NDE4MjA5MX0.1U6Cqu8EI96p5S72QEAzOGaGz89oiQBN3HYK5HsNowU"
}

* To query single Brand
query {
  brand(id: 1) {
    id
    name
    groupId
    group {
      id
      name
    }
  }
}

* To query all brands
query {
  brands {
    id
    name
    groupId
    group {
      id
      name
    }
  }
}

* To add a new entry of brand
mutation {
  addBrand(name: "Jeep", groupId: 3){
    id
    name
    group {
      id
      name
    }
  }
}