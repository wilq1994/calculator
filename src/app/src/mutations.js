import { gql } from "apollo-boost";

export const add = gql`
  mutation Add($a: String!, $b: String!) {
    add(a: $a, b: $b)
  }
`;

export const subtract = gql`
  mutation Subtract($a: String!, $b: String!) {
    subtract(a: $a, b: $b)
  }
`;

export const multiply = gql`
  mutation Multiply($a: String!, $b: String!) {
    multiply(a: $a, b: $b)
  }
`;

export const divide = gql`
  mutation Divide($a: String!, $b: String!) {
    divide(a: $a, b: $b)
  }
`;
