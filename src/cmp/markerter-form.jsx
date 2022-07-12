import { useState } from "react"

export const MarkerterForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    websiteUrl: "",
    linkedInUrl: "",
    experience: "",
    largestBudget: 0,
  })

  const onChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value })
  }

  const resetForm = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      websiteUrl: "",
      linkedInUrl: "",
      experience: "",
      largestBudget: 0,
    })
  }

  return (
    <form
      className="markerter-form-container"
      onSubmit={(ev) => {
        ev.preventDefault()
        onSubmit(formValues)
      }}
    >
      <button type="button" onClick={resetForm}>
        Reset form
      </button>
      <div className="name-container">
        <label>
          First Name :
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={onChange}
            placeholder="Enter your first name"
          />
        </label>
        <label>
          Last Name :
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={onChange}
            placeholder="Enter your last name"
          />
        </label>
      </div>
      <label>
        Email :
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={onChange}
          placeholder="Enter your email address"
          required={true}
        />
      </label>
      <div className="optional-urls">
        <label>
          Website URL :
          <input
            type="url"
            name="websiteUrl"
            value={formValues.websiteUrl}
            onChange={onChange}
            placeholder="Enter your website"
          />
        </label>
        <label>
          LinkedIn Profile :
          <input
            type="url"
            name="linkedInUrl"
            value={formValues.linkedInUrl}
            onChange={onChange}
            placeholder="Enter your linkedIn Profile"
          />
        </label>
      </div>
      <label>
        How many years of experience do you have with Facebook Marketing?
        <select
          value={formValues.experience}
          name="experience"
          onChange={onChange}
        >
          <option value=""></option>
          <option value="no-experience">No experience</option>
          <option value="0-1-years">0-1 Years</option>
          <option value="1-2-years">1-2 Years</option>
          <option value="2-or-more-years">2 Or more years</option>
        </select>
      </label>
      <label>
        What was the biggest campaign budget you have managed in a single month?
        <input
          type="range"
          name="largestBudget"
          value={formValues.largestBudget}
          min="1000"
          max="500000"
          onChange={onChange}
        />
        {formValues.largestBudget}
        <button
          type="button"
          onClick={() => setFormValues({ ...formValues, largestBudget: 0 })}
        >
          Reset budget
        </button>
      </label>
      <button>Send</button>
    </form>
  )
}
