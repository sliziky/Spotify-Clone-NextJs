import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="overflow-y-hidden h-max">
      <main className="flex bg-black min-h-screen text-white overflow-y-hidden">
        <Sidebar/>
        <Center/>
      </main>
    </div>
  )
}

export default Home
