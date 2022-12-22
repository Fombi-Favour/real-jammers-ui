import { firebaseApp } from '../firebase-config'

//prettier-ignore
import { collection, getDocs, orderBy, query } from 'firebase/firestore'


//fetch all docs from firebase
export const getAllFeeds = async (firebaseDb) => {
    const feeds = await getDocs(query(
        collection(firebaseDb, 'videos'), orderBy('id', 'desc'))
    );

    return feeds.docs.map(doc => doc.data());
};