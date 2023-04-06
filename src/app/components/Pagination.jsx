import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPege }) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null
    const page = _.range(1, pageCount + 1)
    return (
        <nav>
            <ul className="pagination">
                {page?.map((page) => (
                    <li
                        className={
                            'page-item' +
                            (page === currentPege ? ' active' : '')
                        }
                        key={'page_' + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPege: PropTypes.number.isRequired
}

export default Pagination
