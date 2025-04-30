import gql from 'graphql-tag';

export const create_user = gql `
    mutation CreateUSer($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, password: $password ){
            #fields to get back after mutation
            id
            username
            email
            ok
        }
}`