import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import IndexPage from "./pages/IndexPage";
import LoginForm from "./event/LoginForm";
import SuccessPage from "./pages/SuccessPage";
import ViewPage from "./component/ViewComponent";

function App() {
  return (
    <BrowserRouter>
      <h2>페이지 이동을 위한 라우터 연습</h2>
    {/* // 브라우저 안에서 동작하는 애들을 router에 등록 시킴 */}
      <Routes>
        <Route path="/"               element={ <IndexPage /> }></Route>
        <Route path="/user/loginForm" element={ <LoginForm /> }></Route>
        <Route path="/user/success"   element={ <SuccessPage /> }></Route>
        <Route path="/user/success/view"   element={ <ViewPage /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;