import { httpService } from "./http.service"

const END_POINT = "forms"

export const markerterService = {
  addForm,
  getFormsCount,
}

async function addForm(form) {
  try {
    const savedForm = await httpService.post(END_POINT, form)
    return savedForm
  } catch (error) {
    throw error.data
  }
}

async function getFormsCount() {
  try {
    return (await httpService.get(END_POINT)).length
  } catch (error) {
    throw error.data
  }
}
