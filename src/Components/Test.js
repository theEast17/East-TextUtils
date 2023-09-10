// import React from 'react'

export default function Test() {
  let str="   hello   "
  console.log(str.trim() === "" ? 0 : str.match(/\S+/g));
}
