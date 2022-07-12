import { httpService } from "./http.service"

const END_POINT='forms'

export const markerterService = {
    addForm
}

async function addForm(form){
    try {
        const savedForm=await httpService.post(END_POINT,form)
        return savedForm
    } catch (error) {
        throw error.data
    }
}





