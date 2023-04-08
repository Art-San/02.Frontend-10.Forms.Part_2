import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({ options, name, onChange, value, label }) => {
    const handleChange = ({ target }) => {
        // подогнали все поля из за Select (так как получаем массив объектов с полями label: & value:)
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <div className="">
                {options.map((option) => (
                    <div
                        key={option.name + '_' + option.valu}
                        className="form-check form-check-inline"
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.name + '_' + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option.name + '_' + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
RadioField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string
}
export default RadioField
