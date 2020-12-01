import React from 'react';
import { Link } from 'react-router-dom';
import s from './pagination.module.scss'

const Pagination = ({ perPage, total, paginate, currentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='container row'>
            <div className={`container col l8 offset-l1 ${s.pagination_container}`}>
                <ul className={`pagination ${s.pagination_list}`}>
                    <li className="waves-effect" style={{ display: currentPage < 2 ? 'none' : 'inline-block' }}><Link onClick={() => paginate(currentPage - 1)} to="#!"><i className={`fas fa-chevron-left ${s.i_font}`}></i></Link></li>
                    {pageNumbers.map((num, index) => {
                        if (currentPage === num) {
                            return (
                                <li className={`waves-effect ${s.active}`} key={index}>
                                    <Link onClick={() => paginate(num)} to="#!">{num}</Link>
                                </li>
                            )
                        } else {
                            return (
                                <li className="waves-effect" key={index}>
                                    <Link onClick={() => paginate(num)} to="#!">{num}</Link>
                                </li>
                            )
                        }

                    })}
                    <li className="waves-effect" style={{ display: currentPage < pageNumbers.length ? 'inline-block' : 'none' }}><Link onClick={() => paginate(currentPage + 1)} to="#!"><i className={`fas fa-chevron-right ${s.i_font}`}></i></Link></li>


                </ul>
            </div>
        </div>
    );
}

export default Pagination;

//Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.