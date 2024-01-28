export const Square = ({ children, isSelect, updateBoard, index }) => {
   const className = `square ${isSelect ? 'is-selected' : ''}`,
      handlerClick = () => {
         updateBoard(index)
      }
   return (
      <div onClick={handlerClick} className={className}>
         {children}
      </div>
   )
}