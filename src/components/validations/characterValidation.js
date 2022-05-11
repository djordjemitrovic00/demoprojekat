import * as Yup from 'yup'
export const Gender = {
    MALE: "male",
    FEMALE: "female",
    NA: "n/a"
}

export const HeightValues = Array.from(Array(180).keys()).map(item => item + 120);


export const validationSchema = Yup.object({
    name: Yup.string()
        .min(4, "Name must be atleast 5 characters!")
        .max(40, "Name cannot be longer than 40 characters!")
        .required("Name cannot be empty!"),
    gender: Yup.mixed().oneOf(Object.values(Gender)).required("Gender cannot be empty!"),
    height: Yup.number("Height must be number!")
        .integer("Height must be integer number!")
        .positive("Height must be positive number!")
        .min(120, "Height must be number above 0!")
        .max(300, "Height must be number below 300!")
        .required("Height cannot be empty!")
})
