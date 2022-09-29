import React from 'react'
import menu from './data'
import Category from './Category'
import Menu from './Menu'
// Set will only give unique value
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(allCategories)

const App = () => {
  const [menuItems, setMenuItems] = React.useState(menu)
  const [categories, setCategories] = React.useState(allCategories)

  function filterItems(category) {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Resturant Menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
