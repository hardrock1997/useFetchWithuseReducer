import {useEffect,useReducer } from "react";
function reducer(state,action) {
    if(action.type==='fetch_data') {
      return {...state,data:action.payload,loading:false};
    }
    else if(action.type==='error') {
      return {...state,data:[],error:action.payload};
    }
    else {
      return state;
    }
  }
export default function useFetch() {
    const [state,dispatch]=useReducer(reducer,{data:[],error:'',loading:true});
    useEffect(()=>{
        async function getData() {
            try{
                const res=await fetch('https://dummyjson.com/products/categories');
                const val=await res.json();
                dispatch({type:'fetch_data',payload:val});
         
            }
            catch(error) {
                dispatch({type:'error',payload:error.message})
            }
        }
        getData();
       },[])
    return state;
}