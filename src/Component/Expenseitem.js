 import './Expenseitem.css';
 function Expenseitem(){
     const expenseDate = new Date(28,3,17);
     const expenseTitle = 'Car Insurance';
     const expenseAmount = 456;
    return(
       <div className='expense-item '>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
       </div>
    );
}

export default Expenseitem;