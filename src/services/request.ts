import { sortBy } from 'lodash';
import {
  getAllMembers,
  addMember,
  deleteMember as fsDeleteMember,
  updateMember,
} from '../firebase/firestore';
import { TMember } from '../model';

export const getMembers = async () => {
  try {
    let members: TMember[] = [];
    const docs = await getAllMembers();
    docs.forEach(doc => {
      const data = doc.data() as TMember;
      members.push({
        ...data,
        docId: doc.id,
      });
    });
    members = sortBy(members, [o => o.indexId]);
    return members;
  } catch (error) {
    throw error;
  }
};

export const submitMember = (data: TMember) => {
  try {
    data.docId ? updateMember(data) : addMember(data);
  } catch (error) {
    throw error;
  }
};

export const deleteMember = (id: string) => {
  try {
    fsDeleteMember(id);
  } catch (error) {
    throw error;
  }
};
