import { useContext } from 'react'

import InsertValue from '../InsertValue'
import Modal from '../Modal'
import VisibleValue from '../VisibleValue'

import style from './index.module.css'

export default function Home() {

  return (
    <div className={style.container}>
      <InsertValue />
      <VisibleValue />
      <Modal />
    </div>
  )
  
}