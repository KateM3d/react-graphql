import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetChatacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return { data, error, loading };
};
