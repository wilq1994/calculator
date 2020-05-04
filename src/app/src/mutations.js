import { gql } from 'apollo-boost';

export const ADD_MUTATION = gql`
  mutation Add($a: String!, $b: String!) {
    add(a: $a, b: $b)
  }
`;

export const SUBTRACT_MUTATION = gql`
  mutation Subtract($a: String!, $b: String!) {
    subtract(a: $a, b: $b)
  }
`;

export const MULTIPLY_MUTATION = gql`
  mutation Multiply($a: String!, $b: String!) {
    multiply(a: $a, b: $b)
  }
`;

export const DIVIDE_MUTATION = gql`
  mutation Divide($a: String!, $b: String!) {
    divide(a: $a, b: $b)
  }
`;