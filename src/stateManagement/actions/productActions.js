import {PRODUCT_ADD, PRODUCT_LIST, PRODUCT_REMOVE} from './actionTypes'

export const add = (item) => {
  return {
    type:PRODUCT_ADD,
    payload:item,
  }
}

export const remove = (id) => {
  return {
    type:PRODUCT_REMOVE,
    payload:id,
  }
}

export const list = () => {
  return {
    type:PRODUCT_LIST,
  }
}
