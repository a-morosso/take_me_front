import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Modal from "../public/BasicModalForm"
import CreateRoom from "../community/CreateRoom"

import {loadChattingListRS } from "../../store/modules/community"



//  소켓js , stompjs 인스톨 
//  서버와 연결할 클라이언트 connection 생성
//   메세지 전송 전 subscriber 와  publicher 지정


function Chatting() {

  const RoomId = "";
  const name = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const RoomData = useSelector(((state=> state.community.chattingList)));
  console.log(RoomData)

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalState, setModalState] = React.useState();
  const [modalName, setModalName] = React.useState("");
  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };

  React.useEffect(() => {
    dispatch(loadChattingListRS())
  }, [])


  return (
    <>
      <Wrap>

        {RoomData && RoomData.map((item, itemIndex) => {
          return (
            <>
              <ChattingList onClick={()=>{
                navigate("/chatting", {state:item.roomId})
              }}>
                <img src="" />
                {item.name}
                {item.userCount}
              </ChattingList>
            </>
          )
        })}


      </Wrap>

      <RoomCreate>

        <button type="button" onClick={() => {
          openModal();
          setModalName("쓸까?말까? 만들기")
          setModalState(
          <CreateRoom close={closeModal}/>)
        }}>쓸까?말까? 만들기</button>
      </RoomCreate>
      <Modal open={modalOpen}
        close={closeModal}
        header={modalName}>
        {modalState}
      </Modal>
    </>

  )
}
export default Chatting;





const Wrap = styled.div`
width: 100%;
height: 100%;
padding: 1rem;
`;

const ChattingList = styled.div`
height: 50%;
border: 1px solid gray;
margin-bottom: 1rem;
`;


const RoomCreate = styled.div`
display: flex;
justify-content: center;
position: fixed;
width: 100%;
bottom: 20%;


button{
    width: 80%;

    background: #FFB7D9;
    color: white;
    padding: 1rem;
    border-radius:30px;
}
`;