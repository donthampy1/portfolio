import Header from "./components/Header/header"
import Home from "./components/Home/Home"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"


function App() {
return <div>
<Header/>
<Home id="home"/>
<Skills  id="skills"/>
<Projects id="projects"/>
<Contact id="contact"/>

</div>

}
export default App
