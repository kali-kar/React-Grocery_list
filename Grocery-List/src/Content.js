import ItemList from './Itemslist';
const Content =({ items,handleCheck,handleDelete }) => {
    return (
        <main>
          {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />    
          ): (
                <p style ={{maginTop: '2rem' }}>Your List is empty.!</p>
          )
          }
        </main>
    )
}

export default Content