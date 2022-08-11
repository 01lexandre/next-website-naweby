import HeaderNav from "./Header/HeaderNav";
import {Box} from "@chakra-ui/react";
import Footer from "./Footer";
import NotifyWeb from "./Header/NotifyWeb";

export default function Layout({children, posts}) {
  console.log('posts', posts)
  return (
    <Box>
      <NotifyWeb posts={posts}/>
      <HeaderNav />
      {children}
      <Footer/>
    </Box>
  )
}
