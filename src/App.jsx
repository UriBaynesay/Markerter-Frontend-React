import "./assets/styles/main.scss"
import { AppFooter } from "./cmp/app-footer"
import { AppHeader } from "./cmp/app-header"
import { MarkerterApp } from "./pages/MarkerterApp"
import { UserMsg } from "./cmp/user-msg"

function App() {
  return (
    <div className="App main-container">
      <AppHeader />
      <main>
        <MarkerterApp />
      </main>
      <AppFooter />
      <UserMsg />
    </div>
  )
}

export default App
