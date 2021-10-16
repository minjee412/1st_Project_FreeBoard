import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      seller {
        name
      }
      name
      createdAt
      remarks
      contents
      price
      pickedCount
      images
    }
  }
`;
