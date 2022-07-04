import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from "../pages/Main" // 메인
import Save from "../pages/Save";  // 아끼기
import Mypage from "../pages/Mypage"; // 마이페이지 
import Community from "../pages/Community"; // 커뮤니티 
import Comment from "../pages/Comment";// 코멘트페이지
import Statistics from "../pages/Statistics" // 통계


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/main" element={<Main />} />  */}
        <Route path="/" element={<Save />} />
        {/* <Route path="/mypage" element={<Mypage />} /> */}
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<Community />} />
        <Route path="/Comment/:postid" element={<Comment />} />
        {/* <Route path="/statistics" element={<Statistics />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
