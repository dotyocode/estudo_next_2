import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Meu site</h1>
      <Link href='/'>Home</Link> <br></br>
      <Link href='/contatos'>Contatos</Link><br></br>
      <Link href='/dashboard'>Painel</Link><br></br>
    </header>
  )
}

