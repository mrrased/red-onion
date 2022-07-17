import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import useAuth from '../../../Hooks/useAuth';
import CardStyle from '../CardStyles/CardStyle';
import ButtonStyle from '../ButtonStyle/ButtonStyle';

const CartDrawer = ({toggleDrawer, state, anchor}) => {

  const {cart} = useAuth();

  // useEffect(()=>{
  //   if(storeData?.length){
  //     console.log('its working');
  //     storeData.map(foodList => console.log(foodList))
  //   }
  // },[storeData])

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          
           <List sx={{padding: '10px'}}>
            { 
            cart.map(foodList => <CardStyle
               key={foodList._id}
              foodList={foodList}></CardStyle>

              // <ListItem key={text} disablePadding>
              //   <ListItemButton>
              //     <ListItemIcon>
              //       {text.img}
              //     </ListItemIcon>
              //     <ListItemText primary={text.name} />
              //   </ListItemButton>
              // </ListItem>
              
            )
            
            }
          </List> 
          <Divider />
          { <ButtonStyle></ButtonStyle>
          /* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      );

      // console.log(storeData?.length);
    return (
        <div>
                {<React.Fragment key={anchor}>
                {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
                </React.Fragment>}
        </div>
    );
};

export default CartDrawer;