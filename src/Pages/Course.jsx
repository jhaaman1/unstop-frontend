import React, { useEffect, useState } from 'react'
import { Box, Button,Image, Text, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/AppReducer/action'


const icons=[
     <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="4" width="18" height="12" rx="1" />
  <line x1="7" y1="20" x2="17" y2="20" />
  <line x1="9" y1="16" x2="9" y2="20" />
  <line x1="15" y1="16" x2="15" y2="20" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="4" width="18" height="12" rx="1" />
  <line x1="7" y1="20" x2="17" y2="20" />
  <line x1="9" y1="16" x2="9" y2="20" />
  <line x1="15" y1="16" x2="15" y2="20" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
  <path d="M7.5 8h3v8l-2 -1" />
  <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-react-native" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
  <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
  <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
  <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
  <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
  <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
  <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arcs-3" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <path d="M7 12a5 5 0 1 0 5 -5" />
  <path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database-import" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
  <path d="M4 6v8m5.009 .783c.924 .14 1.933 .217 2.991 .217c4.418 0 8 -1.343 8 -3v-6" />
  <path d="M11.252 20.987c.246 .009 .496 .013 .748 .013c4.418 0 8 -1.343 8 -3v-6m-18 7h7m-3 -3l3 3l-3 3" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-pie" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8" />
  <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
</svg>
]
const Course = () => {
     const data = useSelector(store => store.AppReducer.data);
     const isLoading=useSelector(store=>store.AppReducer.isLoading)
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getData)
     }, [])
   
     return (
          <Box bgColor="#d0d0d5" w="100%" h="1000px" paddingTop={"100px"}>
               <Box w="50%" textAlign={"center"} m="auto">
                    <Heading fontSize={"20px"}>
                         Welcome to FreeCodeCamp.org
                    </Heading>
                    <Text fontStyle={"italic"}>" I have not failed, I 've just found 10,000 ways </Text>
                    <Text fontStyle={"italic"}>that won't wrok".</Text>
                    <Text fontStyle={"italic"}>- Thomas A. Edison</Text>
                    <Box w="100%" >
                         {
                           isLoading?<Box w="40%" m="auto" mt="100px" display="flex" justifyContent={"space-around"} alignItems={"center"}>
                              <Image src="https://i.gifer.com/VAyR.gif" alt=""/>
                              </Box>: data && data.map((ele,index) => (
                                  <Box p="0 20px" borderRadius={"7px"} h="70px" mt="20px"  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" display="flex" alignItems={"center"} border="1px solid #000">
                                        {icons[index]}
                                        <Text ml="20px" fontSize={"20px"}>{ele.title +  "("+ele.duration +")"}</Text>
                                   </Box>
                              ))
                         }
                    </Box>

               </Box>
          </Box>
     )
}

export default Course