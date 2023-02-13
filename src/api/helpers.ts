import { redirect } from 'react-router-dom';

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { child, get, push, query, ref, set } from 'firebase/database';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { ToDoListItem } from '~/store/types';

import { AUTH_PROVIDERS } from './constants';
import { auth, db } from './firebaseConfig';
import { AuthProviderTypes } from './types';

export const authWithProviders = async (type: AuthProviderTypes) => {
  const provider = AUTH_PROVIDERS[type];

  try {
    if (provider === null) return null;
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = () => {
  return auth.signOut();
};

export const getList = async (userId: string) => {
  const querySnapshot = await getDocs(collection(db, 'users', userId, 'tasks'));

  let tasks: ToDoListItem[] = [];

  querySnapshot.forEach(doc => {
    tasks.push(doc.data() as ToDoListItem);
  });

  return tasks;
};

export const addListItem = async ({
  userId,
  value,
}: {
  userId: string;
  value: string;
}) => {
  const id = `task_${Date.now()}`;

  await setDoc(doc(db, 'users', userId, 'tasks', id), {
    id,
    checked: false,
    value,
  });
};

export const removeListItem = async (userId: string, id: string) => {
  await deleteDoc(doc(db, 'users', userId, 'tasks', id));
};

export const editListItem = async ({
  userId,
  id,
  checked,
  value,
}: {
  userId: string;
  id: string;
  checked: boolean;
  value: string;
}) => {
  await updateDoc(doc(db, 'users', userId, 'tasks', id), {
    checked,
    value,
  });
};
