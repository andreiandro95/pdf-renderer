"use client"
import { PDFDownloadLink } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import FilePdf from './FilePdf'



function FileComponent() {
  const [a,setA] = useState(false)
  useEffect(() => {
    setA(true)
  }, [])
    const data = {
        name: "Andrei",
        age: 29,
        data: "2024-01-27",
    }
    const company = {
      id: 1,
      name: "Company",
    }
    const status = ['1', '2,', '3'];
    const people = [
      {id: 1, name: "Andrei"},
      {id: 2, name: "Test"}
    ]
  return (
    <>
    {a && <PDFDownloadLink fileName='download.pdf' document={<FilePdf data={data} company={company} status={status} people={people} />}>{({ blob, url, loading, error }) =>
        loading ? 'Loading...' : 'Download now!'
      }</PDFDownloadLink>}
        
    </>
  )
}

export default FileComponent