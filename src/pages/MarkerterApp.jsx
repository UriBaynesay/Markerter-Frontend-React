import { useEffect } from "react"
import { useState } from "react"

import { FormsInfo } from "../cmp/forms-info"
import { MarkerterForm } from "../cmp/markerter-form"
import { markerterService } from "../services/markerter.service"
import { showErrorMsg } from "../services/event-bus.service"

export const MarkerterApp = () => {
  const [formsCount, setFormsCount] = useState(0)

  useEffect(() => {
    loadFormsCount()
  }, [])

  const loadFormsCount = async () => {
    try {
      const forms = await markerterService.getFormsCount()
      setFormsCount(forms)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (form) => {
    try {
      await markerterService.addForm(form)
      setFormsCount(formsCount + 1)
    } catch (error) {
      if (error.includes("email already in use"))
        showErrorMsg("Email already in use")
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
