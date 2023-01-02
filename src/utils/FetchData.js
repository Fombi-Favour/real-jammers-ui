//prettier-ignore
import { db } from '../firebase'
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'

//fetch all docs from firebase
export const getAllFeeds = async (firebaseDb) => {
    const feeds = await getDocs(query(
        collection(firebaseDb, 'videos'), orderBy('id', 'desc'))
    );

    return feeds.docs.map(doc => doc.data());
};

// fetch the user information user userId

export const getUserInfo = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if(userSnap.exists()){
        return userSnap.data();
    }else{
        return "No such document"
    }
};

/*export const Getuser = async (firebaseDb, uid) => {
    const q = await getDoc(query(doc(firebaseDb, 'users', uid)));

    return q.data();
}*/