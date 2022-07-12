import { useState } from "react"
import { FormsInfo } from "../cmp/forms-info"
import { MarkerterForm } from "../cmp/markerter-form"

export const MarkerterApp = () => {
  const [formsCount, setFormsCount] = useState(0)

  const onSubmit = (form) => {
    console.log(form)
  }

  return (
    <div className="markerter-app-container">
      
      <FormsInfo formsCount={formsCount} />

      <section className="markerter-form">
        <MarkerterForm onSubmit={onSubmit} />
      </section>
    </div>
  )
}
