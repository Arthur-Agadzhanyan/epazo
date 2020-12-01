import React , {lazy,Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage.js/ErrorPage';
import Loader from './components/Loader/Loader';

const PostsPage = lazy(()=>import('./pages/PostsPage/PostsPage'))
const DetailPage = lazy(()=>import('./pages/DetailPage/DetailPage'))
const CreatePage = lazy(()=>import('./pages/CreatePage/CreatePage'))
const AuthPage = lazy(()=>import('./pages/AuthPage/AuthPage'))
const MainPage = lazy(()=>import('./pages/MainPage/MainPage'))
const Resources = lazy(()=>import('./pages/Resources/Resources/Resources'))
const CreateResources = lazy(()=>import('./pages/Resources/CreateResources/CreateResources'))
const DetailResources = lazy(()=>import('./pages/Resources/DetailResources/DetailResources'))
const HelpPage = lazy(()=>import('./pages/HelpPage/HelpPage'))

export const useRoutes = isAuth => {
    if (isAuth) {//роуты для человека который зарегистрирован и находится в системе
        return (
            <Suspense fallback={<Loader/>}>
                <Switch>
                    <Route path='/' exact>
                        <MainPage />
                    </Route>
                    <Route path='/posts' exact>
                        <PostsPage />
                    </Route>
                    <Route path='/posts/:id' exact>
                        <DetailPage />
                    </Route>
                    <Route path='/create' exact>
                        <CreatePage />
                    </Route>
                    <Route path='/error' exact>
                        <ErrorPage />
                    </Route>
                    <Route path='/resources' exact>
                        <Resources />
                    </Route>
                    <Route path='/create-resources' exact>
                        <CreateResources />
                    </Route>
                    <Route path='/resources/:id' exact>
                        <DetailResources />
                    </Route>
                    <Redirect to='/error' />
                </Switch>
            </Suspense>       
            
        )
    }
    return (// роуты для человека не зарегистрированного в системе
        <Suspense fallback={<Loader/>}>
            <Switch>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Route path='/posts' exact>
                    <PostsPage />
                </Route>
                <Route path='/project-support' exact>
                    <HelpPage />
                </Route>
                <Route path='/posts/:id' exact>
                    <DetailPage />
                </Route>
                <Route path='/adminlogin' exact>
                    <AuthPage />
                </Route>
                <Route path='/resources' exact>
                    <Resources />
                </Route>
                <Route path='/resources/:id' exact>
                    <DetailResources />
                </Route>
                <Route path='/error' exact>
                    <ErrorPage />
                </Route>
                <Redirect to='/error' />
            </Switch>
        </Suspense>
        
    )
}


