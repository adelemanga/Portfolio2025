import { gql } from "@apollo/client";


export const GET_ALL_CONTACTS = gql`
  query GetAllContacts {
    getAllContacts {
      id
      name
      lastname
      email
      message
    }
  }
`;

export const GET_ALL_ADVICES = gql`
  query GetAllAdvices {
    getAllAvis {
      id
      name
      lastname
      message
      imgUrl
      rating
      title
    }
  }
`;

export const WHO_AM_I = gql`
  query WhoAmI {
    whoAmI {
      email
      firstname
      lastname
      isLoggedIn
      role
    }
  }
`;
