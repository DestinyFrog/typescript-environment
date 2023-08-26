import { question } from "readline-sync"
import calculus from "./lib/calculus.js"

const a = parseInt( question( "Type 'a' value: " ) )
const b = parseInt( question( "Type 'b' value: " ) )

console.log( "\nAvailable operations:" )
Object.keys( calculus ).map( calc => console.log( "-", calc ) )
const operation = question( "Choose one aritmetic operation? " )

const result = calculus[operation]( a, b )
console.log( result )