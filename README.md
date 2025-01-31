# `Contacts REST API`

A simple REST API for performing CRUD (Create, Read, Update, Delete) operations on contacts. This project uses in-memory storage (RAM) to store contact data, making it ideal for learning and testing purposes.

## `Features`
- **`Create a new contact`**: Add a new contact with a name, phone number, and email.
- **`Get all contacts`**: Retrieve a list of all contacts.
- **`Get a single contact`**: Retrieve a specific contact by its ID.
- **`Update a contact`**: Modify an existing contact's details.
- **`Delete a contact`**: Remove a contact by its ID.

## `Technologies Used`
- **`Node.js`**: A JavaScript runtime for building the server.
- **`Express.js`**: A web framework for Node.js to handle routing and middleware.
- **`In-Memory Storage`**: Data is stored in an array (RAM) and does not persist after the server restarts.

## `Installation`
 __1. Clone the repository :__
```
git clone https://github.com/JahidulHasanSuhel/contacts-rest-api.git
```
__2. Navigate to the project folder :__
```
cd contacts-rest-api
```
__3. Install dependencies :__
```
npm install
```
__4. Start the server :__
```
node app.js
```
__5. The server will run on `http://localhost:8080`__

## `API Endpoints`
- __`GET /contacts` :__ Get all contacts.

- __`GET /contacts/:id` :__ Get a single contact by ID.

- __`POST /contacts` :__ Create a new contact.

- Request Body :
```
{
  "name": "Mr x",
  "phone": "1234567890",
  "email": "testx@gmail.com"
}
```
- __`PUT /contacts/:id` :__ Update a contact by ID.

- __`Request Body` :__
```
{
  "name": "suhel",
  "phone": "0987654321",
  "email": "suhel@gmail.com"
}
```
- __`DELETE /contacts/:id` :__ Delete a contact by ID.

## `Example Usage`
__1. `Create a New Contact` :__
```
POST http://localhost:8080/contacts
```
__2. `Get All Contacts` :__
```
http://localhost:8080/contacts
```
__3. `Get a Single Contact` :__
```
http://localhost:8080/contacts/1
```
__4. `Update a Contact` :__
```
PUT http://localhost:8080/contacts/1
```
__5. `Delete a Contact` :__
```
DELETE http://localhost:8080/contacts/1
```
## `Contributing`
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.


