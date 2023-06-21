import React from 'react'
import style from "./Pagination.module.css"

export const Pagination = ({recipes, recipesPerPage, currentPage, totalRecipes, setCurrentPage}) => {

  const pageNumbers = [];

  const numberPage = Math.ceil(totalRecipes / recipesPerPage)

  for (let i = 1; i <= numberPage; i++) {
    pageNumbers.push(i); //ASI HAGO MI PAGINACION DINAMICA
    
  }

  ////////////------------
  const onPreviusPage = ()=>{
    setCurrentPage(currentPage - 1)
  }
  ///--------------------
  const onNextPage = ()=>{
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (n)=>{
    setCurrentPage(n)
  }

  return (
    <div className={style.container}>
      <button onClick={onPreviusPage} className={currentPage === 1 ? "disabled" : style.btn} disabled={currentPage === 1}>Previous</button>

      {
        pageNumbers.map(noPage=>(
          <button onClick={()=> onSpecificPage(noPage)} className={currentPage === noPage ? style.btnCurrent : style.btn} key={noPage}>{noPage}</button>
        ))
      }

      <button onClick={onNextPage} className={currentPage >= pageNumbers.length ? "disabled" : style.btn} disabled={currentPage >= pageNumbers.length}>Next</button>
    </div>


  )
}
