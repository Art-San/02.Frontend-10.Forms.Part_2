import React, { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/TextField'
import api from '../../api'
import SelectField from '../common/form/SelectField'

const RegisterForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        profession: ''
    })
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState()

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен не некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязательна для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одну цифру'
            },
            min: {
                message: 'Пароль должен быть не менее 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: 'Обязательно выберите вашу профессию'
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <SelectField
                    defaultOption="Choose..."
                    label="Выберите вашу профессию"
                    value={data.profession}
                    error={errors.profession}
                    onChange={handleChange}
                    options={professions}
                />
                <div className="mb-4">
                    <label htmlFor="validationCustom04" className="form-label">
                        Выберите вашу профессию
                    </label>
                    <select
                        className="form-select"
                        id="validationCustom04"
                        name="profession"
                        value={data.profession}
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Варианты...
                        </option>
                        {professions &&
                            Object.keys(professions).map((professionName) => (
                                <option
                                    key={professions[professionName]._id}
                                    value={professions[professionName]._id}
                                >
                                    {professions[professionName].name}
                                </option>
                            ))}
                        {/* {professions?.map((profession, i) => (
                            <option
                                key={i}
                                value={profession._id}
                                selected={profession.id === data.profession}
                            >
                                {profession.name}
                            </option>
                        ))} */}
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary w-100 mx-auto"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default RegisterForm
