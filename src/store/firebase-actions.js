import { db } from "../firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { uiActions } from "./uiSlice";
import { authActions } from "./authSlice";
import { plantActions } from "./plantSlice";

const userRef = collection(db,'users')
const plantRef = collection(db,'plants')


export const checkUser = (user) => {
  return async (dispatch) => {
    const handler = async () => {
      const res = await getDocs(userRef)
      const datas = await res.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
      for (let x = 0; x < datas.length; x++){
        if ((datas[x].username === user.username) && (datas[x].password === user.password)){
          dispatch(authActions.login(datas[x]))
          dispatch(uiActions.showUI({type:'success', message:'Login Successfully'}))
          setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
          return
        }
      }
      dispatch(uiActions.showUI({type:'error', message:'Your account do not exist!'}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }
    try{
      handler()
    }catch(err){
      dispatch(uiActions.showUI({type:'error', message:'Server Error'}))
      
    }
  }
}

export const createUser = (user) => {
  return async (dispatch) => {
    const handler = async () => {
      const res = await addDoc(userRef,user)
      dispatch(authActions.login({...user,id:res.id}))
    }
    try{
      handler()
      dispatch(uiActions.showUI({type:'success',message:'New account successfully created!'}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }catch(err){
      dispatch(uiActions.showUI({type:'error',message:'Error occured in creating the account!'}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }
  }
}
export const getUsers = () => {
  return async (dispatch) => {
    const handler = async () => {
      const res = await getDocs(userRef)
      const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
      dispatch(authActions.setUsers(data))
    }
    try{
      handler()
    }catch(err){

    }
  }
}

export const updateUser = (id,user) => {
    return async (dispatch) => {
      const handler = async () => {
        const userDoc = doc(db, 'users', id)
        await updateDoc(userDoc, user)
      }
      try{
        handler()
        dispatch(uiActions.showUI({type:'success', message:'Successfully updated the account!'}))
        dispatch(authActions.login(user))
        setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
      }catch(err){
        dispatch(uiActions.showUI({type:'error',message:'There was an error updating the account!'}))
        setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
      }
    }
}
export const deleteUser = (id) => {
    return async (dispatch) => {
      const handler = async () => {
        const userDoc = doc(db,'users',id)
        await deleteDoc(userDoc)
      }
      try{
        handler()
        dispatch(authActions.logout())
        dispatch(uiActions.showUI({type:'success',message:'Account deleted successfully'}))
        setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
      }catch(err){
        dispatch(uiActions.showUI({type:'error',message:'There was an error deletign the account!'}))
        setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
      }
    }
}

export const createPlant = (userid,plant) =>{
  return async (dispatch) => {
    const handler = async () =>{
      await addDoc(plantRef,{...plant,userid:userid})
    }
    try{
      handler()
      dispatch(uiActions.showUI({type:'success',message:'Plant Created successfully'}))
      getPlants()
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }catch(err){
      dispatch(uiActions.showUI({type:'error',message:'There was an error with the server!'}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }
  }
}
export const getPlants = () => {
  return async (dispatch) => {
    const handler = async () => {
      const res = await getDocs(plantRef)
      const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
      dispatch(plantActions.getAllPlants(data))
    }
    try{
      handler()
    }catch(err){

    }
  }
}

export const updatePlant = (id,userid) => {
  return async (dispatch) => {
    const handler = async () => {
      const plantDoc = doc(db, 'plants', id)
      await updateDoc(plantDoc, userid)
      getPlants()
    }
    try{
      handler()
      dispatch(uiActions.showUI({type:'success',message:'Plant bought successfully'}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }catch(err){
      dispatch(uiActions.showUI({type:'error',message:'There was an error occured while connecting to database'}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }
  }
}

export const deletePlant = (id) => {
  return async (dispatch) => {
    const handler = async() => {
      const plantDoc = doc(db,'plants',id)
      await deleteDoc(plantDoc)
    }
    try{
      handler()
      dispatch(uiActions.showUI({type:'success',message:'Plant deleted successfully'}))
      getPlants()
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }catch(err){
      dispatch(uiActions.showUI({type:'error',message:{err}}))
      setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
    }
  }
}