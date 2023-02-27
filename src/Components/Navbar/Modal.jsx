import { color, Modal,ModalBody, ModalCloseButton, ModalContent, ModalHeader, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { FaBars, FaTimes,FaPaintBrush, } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

import { useDispatch, useSelector } from 'react-redux';
import { change_theme } from '../../Redux/ThemeReducer/theme.action';
const Modalis = () => {
    const themeColor = useSelector((store) => store.Theme.theme);
    const dispatch=useDispatch()
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <div onClick={onOpen} > <VscColorMode size={30}/></div>
      
            <Modal isOpen={isOpen} onClose={onClose} >
              <ModalContent style={{backgroundColor:themeColor,color:"white",padding:"20px",marginTop:"10%",border:"10px solid black"}}>
                <ModalHeader>Theme</ModalHeader>
                <ModalCloseButton size={40} style={{margin:"20px"}} />
                <ModalBody>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px"}}>
                    {ColorTheme.map((el)=>{
                   return <div onClick={()=>{dispatch(change_theme(el.backgroundColor));onClose()}} key={el.id} style={{backgroundColor:el.backgroundColor,width:"70px",height:"70px",border:"2px solid white"}}></div>
                    })}
                  </div>
                </ModalBody>
                </ModalContent>
            </Modal>
      
           </>
        )
      }



export default Modalis;

const ColorTheme=[
    {id:1,backgroundColor:"blue"},
    {id:2,backgroundColor: "#00ffff"},
    {id:3,backgroundColor:"#824d9a"},
    {id:4,backgroundColor:"#40ff00"},
    {id:5,backgroundColor:"#00ffbf"},
    {id:6,backgroundColor:"#008060"},
    {id:7,backgroundColor:"orange"},
    {id:8,backgroundColor:"red"},
    {id:9,backgroundColor:"#ff0040"}
]