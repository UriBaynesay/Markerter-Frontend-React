import { useState } from "react"
import { FormsInfo } from "../cmp/forms-info"
import { MarkerterForm } from "../cmp/markerter-form"

export const MarkerterApp = () => {
  const [formsCount, setFormsCount] = useState(0)

  const onSubmit = (form) => {}

  return (
    <div className="markerter-app-container">
      <FormsInfo formsCount={formsCount} />
      <MarkerterForm onSubmit={onSubmit} />
    </div>
  )
}
