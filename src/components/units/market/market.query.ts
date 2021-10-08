import { gql } from "@apollo/client";

// export const FETCH_USED_ITEMS = gql`
//   query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
//     fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
//       _id
//       name
//       contents
//       remarks
//       tags
//       images
//       price
//       pickedCount
//       seller {
//         _id
//         email
//         name
//         picture
//       }
//       createdAt
//       deletedAt
//     }
//   }
// `;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String, $isSoldout: Boolean) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      contents
      seller {
        _id
        email
        name
      }
      price
      pickedCount
      tags
    }
  }
`;
