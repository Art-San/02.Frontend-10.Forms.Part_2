import React from 'react'
import Select from 'react-select' // Множественный select
import PropTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === 'object'
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options

    const handleChange = (value) => {
        onChange({ name: name, value })
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <Select // Множественный select
                isMulti // можно выбирать несколько вариантов
                closeMenuOnSelect={false}
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
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default MultiSelectField