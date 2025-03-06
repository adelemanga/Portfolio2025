import { gql } from "@apollo/client";

export const ADD_CONTACT = gql`
  mutation AddContact(
    $name: String!
    $lastname: String!
    $email: String!
    $message: String!
  ) {
    addContact(
      name: $name
      lastname: $lastname
      email: $email
      message: $message
    ) {
      id
      name
      lastname
      email
      message
    }
  }
`;


export const ADD_ADVICE = gql`
  mutation AddAvis(
    $name: String!
    $lastname: String!
    $message: String!
    $imgUrl: String!
    $rating: Int!
    $title: String!
  ) {
    addAvis(
      name: $name
      lastname: $lastname
      message: $message
      imgUrl: $imgUrl
      rating: $rating
      title: $title
    ) {
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


export const DELETE_AVIS = gql`
  mutation deleteAvis($aviId: String!) {
    deleteAvis(aviId: $aviId)
  }
`;

export const CREATE_NEW_AVIS = gql`
  mutation CreateNewAvis($data: NewAvisInput!) {
    createNewAvis(data: $data) {
      id
      name
      lastname
      title
      message
      rating
      imgUrl
    }
  }
`;
