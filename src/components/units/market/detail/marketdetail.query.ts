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
      tags
      useditemAddress {
        _id
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
