 import { Mid1 } from './Mid1'
import {Navbar }from './Navbar'
import { Mid3 } from './Mid3'
import { Electronics } from './Electronics'
import { Sports } from './Sports';

export function Home(){
   
  return (
    <>
        <Navbar></Navbar>
        <Mid1></Mid1>
        <Mid3></Mid3>
        <Electronics></Electronics>
        <Sports></Sports>
    </>
  )
}