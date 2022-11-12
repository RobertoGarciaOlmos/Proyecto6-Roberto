import { Routes, Route} from 'react-router-dom'
import ContactPage from '../pages/ContactPage';
import MyProfilePage from '../pages/MyProfilePage';
import MyProjectsPage from '../pages/MyProjectsPage';
import MyPortafolioPage from '../pages/ExperiencePage';
import EducationPage from '../pages/EducationPage';


const RoutesPages = () =>{
return(
<Routes>
    <Route path='/' element = {<MyProfilePage/>}/>
    <Route path='/Education' element = {<EducationPage/>}/>
    <Route path='/Portfolio' element = {<MyPortafolioPage/>}/>
    <Route path='/Projects' element = {<MyProjectsPage/>}/>
    <Route path='/Contact' element = {<ContactPage/>}/>
    <Route path='*' element = {<MyProfilePage/>}/>

</Routes>

)
}

export default RoutesPages;