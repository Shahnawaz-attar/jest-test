import React ,{Suspense} from 'react'
import RandomClass from './components/randomClass.jsx'
import LifeCycleMethod from './components/lifeCycleMethods.jsx'
import UseReducer from './components/useReducer.jsx'
import UseRef from './components/useRef.jsx'
import FetchDemo from './customHooks/FetchDemo.js'
import ModelHome from './components/portals/ModelHome.js'
import LifeCycleMethods from './components/lifeCycle/LifeCycle.js'
import Fparent from './components/forwordRef/Fparent.js'
import Parent from './components/reactMemo/Parent.js'
import MyComponentWithExtraProp from './components/Hof.js'
const LazyComponent = React.lazy(()=> import('./components/randomFunc.jsx'))

const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<>Lood</>}>
        <LazyComponent  />
      </Suspense> */}
      <hr/>
      {/* <RandomClass/> */}

      {/* <LifeCycleMethod/> */}

      {/* <UseReducer /> */}

      {/* <UseRef /> */}

      {/* custom hooks */}
      {/* <FetchDemo /> */}

      {/* portals */}
      {/* <ModelHome /> */}


      {/* lifeCycle */}
      {/* <LifeCycleMethods /> */}



      {/* forword ref */}
      {/* <Fparent /> */}



      {/* React.memo */}
      {/* <Parent/> */}


      {/* HOC */}
      <MyComponentWithExtraProp />
    </div>
  )
}

export default App

//context api demo
// import AddToDo from "./contextApi/AddToDo"
// import { ToDoProvider } from "./contextApi/ToDoContext"
// import ToDoList from "./contextApi/ToDoList"

// const App = () => {
//   return (
//     <ToDoProvider>
//       <data className="App">
//       <h1>ToDo App</h1>
//       <AddToDo/>
//       <ToDoList/>
//       </data>
//     </ToDoProvider>
//   )
// }

// export default App

//react router

// import React from "react";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from "./components/router/Home";
// import About from "./components/router/About";
// import Users from "./components/router/Users";
// import UserDetail from "./components/router/UserDetail";

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/" style={{ marginRight: "10px" }}>
//           Home
//         </Link>
//         <Link to="/about" style={{ marginRight: "10px" }}>
//           About
//         </Link>
//         <Link to="/users">Users</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />

//         <Route path="/users" element={<Users />}>
//           <Route path=":id"  element={<UserDetail />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
//

//Simple Redux
// import React from 'react'
// import Counter from './components/simple-redux-demo/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App





// Redux Toolkit (RTK)

// import React from 'react'
// import Counter from './components/redux-toolkit-demo/features/counter/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App





// Redux Toolkit (RTK)

// import React from 'react'
// import Posts from './components/redux-toolkit-demo/features/posts/Posts'

// const App = () => {
//   return (
//     <div>
//       <Posts/>
//     </div>
//   )
// }

// export default App


// Redux Toolkit (RTK)

// import React from 'react'
// import Posts from './components/rtk-query/Posts'

// const App = () => {
//   return (
//     <div>
//       <Posts/>
//     </div>
//   )
// }

// export default App