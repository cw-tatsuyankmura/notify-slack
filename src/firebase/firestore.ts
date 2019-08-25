import 'firebase/firestore';
import 'dotenv/config';
import firebase from './config';
import { TMember } from '../model';

const env = process.env;

const INDEX_COUNTER_DOC_ID = env.REACT_APP_INDEX_COUNTER_DOC_ID as string;
const COLLECTION_MEMBERS = env.REACT_APP_FIRESTORE_COLLECTION_MEMBERS as string;
const COLLECTION_INDEX_COUNTER = env.REACT_APP_FIRESTORE_COLLECTION_INDEX_COUNTER as string;

const db = firebase.firestore();

const dbMembers = db.collection(COLLECTION_MEMBERS);
const dbIndexCounter = db.collection(COLLECTION_INDEX_COUNTER);

type TIndexCounter = {
  id: number;
};

const getNewIndexCounter = async () => {
  const snapShot = await dbIndexCounter.doc(INDEX_COUNTER_DOC_ID).get();
  const indexCounter = snapShot.data() as TIndexCounter;
  return indexCounter.id + 1;
};

export const getAllMembers = () => dbMembers.get();

export const addMember = async (params: TMember) => {
  const indexId = await getNewIndexCounter();
  dbIndexCounter.doc(INDEX_COUNTER_DOC_ID).set({ id: indexId });
  dbMembers.add({
    ...params,
    indexId,
  });
};

export const updateMember = (params: TMember) => {
  const { name, position, slackId, docId, comment, indexId } = params;
  dbMembers.doc(docId).set({
    name,
    position,
    slackId,
    comment,
    indexId,
  });
};

export const deleteMember = (docId: string) => dbMembers.doc(docId).delete();
