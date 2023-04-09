import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === 'object'
            ? Object.values(options)
            : options

    // Для того, чтобы компоненты selectField и multiSelectField сделать полностью переиспользуемыми,
    // мы рекомендуем перенести преобразование данных из этих компонентов в registerForm.
    // Для этого:
    // В компонентах selectField и multiSelectField
    // заменяем преобразование в массив optionsArray на следующее:

    // const optionsArray =
    //     !Array.isArray(options) && typeof options === 'object'
    //         ? Object.keys(options).map((optionName) => ({
    //               label: options[optionName].name,
    //               value: options[optionName]._id
    //           }))
    //         : options

    const handleChange = (value) => {
        onChange({ name, value })
        // onChange({ name: name, value }) // Последние корректировки
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                defaultValue={defaultValue} // Последние корректировки
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
            />
        </div>
    )
}
MultiSelectField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    defaultValue: PropTypes.array // Последние корректировки
}

export default MultiSelectField
