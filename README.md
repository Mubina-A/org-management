API Name : staffLogin
Purpose :  The Login API provides authentication functionality for access to other API.
Base URL : http://localhost:3000/staffLogin
Payload:
{
	"username" : "ADMIN",
    "password" : "brendan@10"
}
Response:
{
    "statusCode": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjEsImdyb3VwSWQiOlsxXSwiaWF0IjoxNzE0MDYwMDYyLCJleHAiOjE3MTQwNjM2NjJ9.-Cq7rX2ytGVYUKFcV1jPKoeJhoA1ZWRJcKl9PvFOZmM",
    "statusMessage": "Success"
}
-----------------------

API Name : getAllOrganization
Purpose :  All organization details will be reflected.
Base URL : http://localhost:3000/getAllOrganization
Authorization: bearer token
Payload: no payload
Response:
{
    "statusCode": 200,
    "data": [
        {
            "_id": "6629255a2e6bc6e0fede69fe",
            "organizationId": 1,
            "orgName": "ABC",
            "description": "Description of ABC",
            "industry": "product",
            "foundedYear": "1995-10-10T00:00:00.000Z",
            "employees": 100,
            "website": "https://www.w3schools.com/sql/default.asp",
            "country": "India",
            "companyLogo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAE",
            "isActive": true,
            "createdAt": "2024-04-24T15:29:31.000Z",
            "updatedAt": "2024-04-24T15:29:31.000Z",
            "__v": 0
        },
        {
            "_id": "6629255b2e6bc6e0fede69ff",
            "organizationId": 2,
            "orgName": "DEF",
            "description": "Description of DEF",
            "industry": "healthcare",
            "foundedYear": "1993-11-15T00:00:00.000Z",
            "employees": 200,
            "website": "https://www.w3schools.com/",
            "country": "Canada",
            "companyLogo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAJ",
            "isActive": true,
            "createdAt": "2024-04-24T15:29:31.001Z",
            "updatedAt": "2024-04-24T15:29:31.001Z",
            "__v": 0
        },
        {
            "_id": "662a59d4a6cdd98100dcd4db",
            "organizationId": 3,
            "orgName": "GHI",
            "description": "test",
            "industry": "bpo",
            "foundedYear": "2019-10-29T00:00:00.000Z",
            "employees": 300,
            "website": "https://www.w3schools.com/js/default.asp",
            "country": "Australia",
            "companyLogo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAS",
            "isActive": true,
            "createdAt": "2024-04-25T13:25:40.135Z",
            "updatedAt": "2024-04-25T13:25:40.135Z",
            "__v": 0
        }
    ],
    "statusMessage": "Success"
}
---------------------------------------
API Name : getOrganizationById
Purpose :  One organization data will be available for one id.
Base URL : http://localhost:3000/getOrganizationById?organizationId=1
Authorization: bearer token
Payload(query params):
{
	organizationId : 1
}
Response:
{
    "statusCode": 200,
    "data": {
        "_id": "6629255a2e6bc6e0fede69fe",
        "organizationId": 1,
        "orgName": "ABC",
        "description": "Description of ABC",
        "industry": "product",
        "foundedYear": "1995-10-10T00:00:00.000Z",
        "employees": 100,
        "website": "https://www.w3schools.com/sql/default.asp",
        "country": "India",
        "companyLogo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAE",
        "isActive": true,
        "createdAt": "2024-04-24T15:29:31.000Z",
        "updatedAt": "2024-04-24T15:29:31.000Z",
        "__v": 0
    },
    "statusMessage": "Success"
}
-------------------------------------------

API Name : deleteOrganization
Purpose :  soft delete an organisation details by updating active status.
Base URL : http://localhost:3000/deleteOrganization?organizationId=3
Authorization: bearer token
Payload(query params):
{
	organizationId : 3
}
Response:
{
    "statusCode": 200,
    "data": null,
    "statusMessage": "Deleted Successfully"
}
----------------------------------
API Name : deleteOrganization
Purpose :  hard delete an organisation details from db permanently.
Base URL : http://localhost:3000/hardDeleteOrganization?organizationId=2
Authorization: bearer token
Payload(query params):
{
	organizationId : 2
}
Response:
{
    "statusCode": 200,
    "data": null,
    "statusMessage": "Deleted Successfully"
}
--------------------------------------
API Name : createOrganization
Purpose :  creates an organization.
Base URL : http://localhost:3000/createOrganization
Authorization: bearer token
Payload:
{
    "organizationId": 2,
    "orgName": "GHI",
    "description": "Description of GHI",
    "industry": "bpo",
    "foundedYear": "2019-10-29T00:00:00.000Z",
    "employees": 300,
    "website": "https://www.w3schools.com/js/default.asp",
    "country": "Australia",
    "companyLogo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAS"
}
Response:
{
    "statusCode": 200,
    "statusMessage": "Success"
}
------------------------------------
API Name : editOrganization
Purpose :  edit an organization detail.
Base URL : http://localhost:3000/editOrganization
Authorization: bearer token
Payload:
{
    "organizationId": 3,
    "description": "test"
}
Response:
{
    "statusCode": 200,
    "statusMessage": "Updated Successfully"
}
---------------------------------
API Name : userLogin
Purpose :  The Login API provides authentication functionality for access to other API.
Base URL : http://localhost:3000/userLogin
Payload:
{
  	"username" : "TOBY_PORTER",
    "password" : "toby@10"
}
Response:
{
    "statusCode": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOjMsImdyb3VwSWQiOjIsImlhdCI6MTcxNDA2MjIwNSwiZXhwIjoxNzE0MDY1ODA1fQ.d713m9tq9Ldlo3npFkcL2tNK2SqB84K2C9IjVtleDIw",
    "statusMessage": "Success"
}
---------------------------------
API Name : getUserById
Purpose :  user can view their own data and admin can view user data.
Base URL : http://localhost:3000/getUserById?userId=1
Authorization: bearer token
Payload(query params):
{
	userId : 1
}
Response:
{
    "statusCode": 200,
    "data": {
        "_id": "66292b62d6041b6238c11f0e",
        "userId": 1,
        "username": "TOBY_PORTER",
        "name": "Toby Porter",
        "email": "toby@mailinator.com",
        "mobileNumber": "9500190765",
        "password": "$2b$10$dI5DZ7kydlKIc0aNOGrdJeKFPLO9qIfjy5MYAFWBuhm.aq8Sgwsg.",
        "organizationId": [
            1
        ],
        "roleId": 3,
        "groupId": 2,
        "isActive": true,
        "createdAt": "2024-04-24T15:55:14.400Z",
        "updatedAt": "2024-04-24T15:55:14.400Z",
        "__v": 0
    },
    "statusMessage": "Success"
}
------------------------------------
