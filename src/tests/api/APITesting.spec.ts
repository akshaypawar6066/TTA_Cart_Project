import { test, expect } from '@playwright/test';
import createUserData from '../../testData/api/createUser.json';
import updateUserData from '../../testData/api/updateUser.json';
import { env } from '../../config/env';


//test.describe.serail   ---> This will guaranty the flow of execution. here  Get->Post->Put->Delete

test.describe.serial('Crud Operations', () => {
    let createdUserId: string;
    test('GetAllUsers', async ({ request }) => {

        const response = await request.get(`${env.apiBaseURL}/api/users?page=1`,
            {
                headers: {
                    'x-api-key': 'free_user_3EOUdNjHbQSQGDhneeOS0LIX9GB'
                }
            }
        );

        //Response Assertions.
        expect(response.ok()).toBeTruthy();   //To validate response is succcessful.
        expect(response.status()).toBe(200);   //To validate status code.
        expect(response.statusText()).toBe('OK');  //To validate status message.
        expect(response.headers()['content-type']).toContain('application/json');  //To validate response headers.
        expect(response.url()).toContain('/users?page=1');   //To validate response url.


        const responseBody = await response.json();
        //  console.log(responseBody);

        //Response Body Fields Addertions.
        expect(responseBody.per_page).toBe(6);
        expect(responseBody.data[0].email).toBe('george.bluth@reqres.in');

        //Print all users first name from this response
        //console.log("------------------------------------");
        /*
            for (const user of responseBody.data) {
                console.log(user.first_name);
            }
                */
    });


    test('CreateNewUser', async ({ request }) => {

        const response = await request.post(
            `${env.apiBaseURL}/api/users`,
            {
                headers: {
                    'x-api-key': 'free_user_3EOUdNjHbQSQGDhneeOS0LIX9GB',
                    'Content-Type': 'application/json'
                },
                data: createUserData

            }
        );

        //Assertions on Response
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);
        expect(response.statusText()).toBe("Created");
        expect(response.headers()['content-type']).toContain('application/json');
        expect(response.url()).toContain("/api/users");

        const responseBody = await response.json();


        //Assertions on Response Body
        expect(responseBody.name).toBe("Akshay");
        expect(responseBody.job).toBe("QA Engineer");

        expect(responseBody).toHaveProperty("department");   //To check if any field exists in response or not.
        expect(responseBody).toHaveProperty("department", "Engineering");  //to check key and value 

        expect(responseBody).toHaveProperty("id");

        createdUserId = responseBody.id;
        expect(responseBody).toHaveProperty("id", createdUserId);
        // console.log("Created User Id Is:" + createdUserId);
        // console.log(`Created user Id Is:${responseBody.id}`);

        //To print the response headers.
        // console.log(response.headers());


    });


    test('UpdateUser', async ({ request }) => {

        const response = await request.put(
            `${env.apiBaseURL}/api/users/${createdUserId}`,
            {
                headers: {
                    'x-api-key': 'free_user_3EOUdNjHbQSQGDhneeOS0LIX9GB',
                    'Content-Type': 'application/json'
                },
                data: updateUserData

            }
        );

        //Assertions on  Response
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");
        expect(response.headers()['content-type']).toContain('application/json');
        expect(response.url()).toContain("/api/users");


        const responseBody = await response.json();


        //Assertions on response Body
        expect(responseBody.name).toBe("Akshay");
        expect(responseBody.job).toBe("Senior QA Engineer");
        expect(responseBody.department).toBe("Engineering");

        //Validate If updateAt exits or not in update API Response. 
        expect(responseBody).toHaveProperty("updatedAt");

        // console.log(response.status());
        //console.log(response.statusText());


    });

    test('DeleteUser', async ({ request }) => {

        const response = await request.delete(
            `${env.apiBaseURL}/api/users/${createdUserId}`,
            {
                headers: {
                    'x-api-key': 'free_user_3EOUdNjHbQSQGDhneeOS0LIX9GB',
                    'Accept': 'application/json'
                }
            }
        );

        //Assertions on the Response.
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(204);
        expect(response.statusText()).toBe("No Content");
        expect(response.url()).toContain("/api/users");

        //  console.log(response.status());
        // console.log(response.statusText());

        //No Response Body is present so No assertions on the Response Body.
    });


})