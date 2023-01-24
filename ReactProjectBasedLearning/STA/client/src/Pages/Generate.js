import React from 'react'
import jsPDF from "jspdf"

const Generate = () => {
    var generatePDF=()=>{
    var doc= new jsPDF('p','pt')
    doc.text(20,20,'this is the first title.')
    doc.addFont('helvetica','normal');
    doc.text(20,60, 'this is the second title');
    doc.text(20,100,'this is the third title');
    doc.save ('sta_id_card.pdf')

    }

  return (
    <div>
    <h2>Generate</h2>
    <button onClick={generatePDF}>Download</button>
    </div>
  )
}

export default Generate