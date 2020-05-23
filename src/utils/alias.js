function copyObject (object) {
  return { ...object }
}

function copyArray (array) {
  return [...array]
}

function findByCode (array, id) {
  return array.find(o => o.code === id)
}
export default {
  copyObject,
  copyArray,
  findByCode
}
