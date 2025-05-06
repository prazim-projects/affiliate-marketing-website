import gql from 'graphql-tag';

export const create_user = gql `
    mutation createUser($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, password: $password ){
            #fields to get back after mutation
            user{
                id
                email
                username
            }
        }
}`

// export const login_user = gql`
//     mutation loginUser($username: String!, $password: String!){
//         login(username : $username, password : $password){

//         }
//     }
// `
export const getAuth = gql `
    mutation tokenAuth($password: String!, $username: String!){
        tokenAuth(password: $password, username: $username){
            token
            payload
            refreshExpiresIn
            user{
                id
                email
                username
            }
        }
    }
`