import "./assets/styles/main.scss"
import { AppFooter } from "./cmp/app-footer"
import { AppHeader } from "./cmp/app-header"
import { MarkerterApp } from "./pages/MarkerterApp"

function App() {
  return (
    <div className="App main-container">
      <AppHeader />
      <main>
        <MarkerterApp />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
