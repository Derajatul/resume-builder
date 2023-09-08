"use client"

import Forms from './components/Forms'
import { useState } from 'react'
import { Margin, usePDF } from "react-to-pdf";

const initialData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  address: ''
}

export default function Home() {
  const [data, setData] = useState(initialData)

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM }
  });
  
  return (
    <main className="min-h-screen">
      <Forms
        fullNameValue={data.fullName}
        emailValue={data.email}
        phoneNumberValue={data.phoneNumber}
        addressValue={data.address}
        handleChange={handleChange}
        onPress={toPDF}
      />
      <div ref={targetRef} className="w-full p-6">
        <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{data.fullName}</h3>
        <p>{data.address}</p>
        <p>{data.email}</p>
        <p>{data.phoneNumber}</p>
      </div>
    </main>
  )
}