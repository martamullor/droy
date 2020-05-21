function copyObject (object) {
  return { ...object }
}

function copyArray (array) {
  return [...array]
}

function findByCode (array, id) {
  return array.find(o => o.code === id)
}
module.exports = {
  copyObject,
  copyArray,
  findByCode
}
