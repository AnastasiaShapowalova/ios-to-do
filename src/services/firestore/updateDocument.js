import { doc, updateDoc } from 'firebase/firestore'

import { firestore } from '../firebase'

const updateDocument = async (collectionPath, id, data) => {
  const ref = await doc(firestore, collectionPath, id)
  return updateDoc(ref, data)
}

export default updateDocument
