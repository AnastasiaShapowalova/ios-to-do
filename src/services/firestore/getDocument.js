import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where
} from 'firebase/firestore'

import { firestore } from 'services/firebase'

const getDocument = async (collectionPath, queries, orderByRule, limitRule) => {
  const ref = collection(firestore, collectionPath)
  const queriesExtended = queries && queries.map((q) => where(...q))
  orderByRule && queriesExtended.push(orderBy(...orderByRule))
  limitRule && queriesExtended.push(limit(limitRule))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })
  return result
}

export default getDocument
