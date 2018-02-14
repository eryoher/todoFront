import axios from 'axios';
import * as types from './types';
import { PATH_SITE } from '../constants/globals';

export function fetchDataTodoLists(){
  const request = axios.get(PATH_SITE + 'lists.json');
  return{
    type: types.FETCH_DATA_LIST,
    payload: request
  };
}

export function addTodo (text){
  var url = PATH_SITE + 'lists.json'
  var params = new URLSearchParams();
  params.append('name', text);
  const request = axios.post(url, params);
  return{
    type: types.ADD_TODO,
    payload: request
  };
}

export function editTodo (id, text) {
  var url = PATH_SITE + 'lists/edit/'+id+'.json'
  var params = new URLSearchParams();
  params.append('name', text);
  const request = axios.post(url, params);
  return{
    type: types.UPDATE_TODO,
    payload: request
  };
}

export function removeTodo(id){
  const request = axios.post(PATH_SITE + 'lists/delete/'+id+'.json');
  return{
    type: types.REMOVE_TODO,
    payload: request
  };
}

export function completeTodo (id, checked){
  var url = PATH_SITE + 'lists/edit/'+id+'.json'
  var update = (checked) ? 0 : 1;
  var params = new URLSearchParams();
  params.append('checked', update);
  const request = axios.post(url, params);
  return{
    type: types.COMPLETE_TODO,
    payload: request
  };
}

export function completeAllTodos(update){
  var url = PATH_SITE + 'lists/updateAll.json'
  var params = new URLSearchParams();
  params.append('checked', update);
  const request = axios.post(url, params);
  return{
    type: types.COMPLETE_ALL_TODO,
    payload: request
  };
}

export function removeCompleted (){
  var params = new URLSearchParams();
  params.append('checked', 1);
  const request = axios.post(PATH_SITE + 'lists/deleteAll.json', params);
  return{
    type: types.REMOVE_TODO,
    payload: request
  };

}
