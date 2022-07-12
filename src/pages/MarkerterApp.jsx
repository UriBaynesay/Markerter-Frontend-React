import { useState } from "react"

import { FormsInfo } from "../cmp/forms-info"
import { MarkerterForm } from "../cmp/markerter-form"
import { markerterService } from "../services/markerter.service"

export const MarkerterApp = () => {
  const [formsCount, setFormsCount] = useState(0)

  const onSubmit = async (form) => {
    try {
      const savedForm = await markerterService.addForm(form)
      setFormsCount(formsCount+1)
    } catch (error) {
      console.error(error)
    }
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
